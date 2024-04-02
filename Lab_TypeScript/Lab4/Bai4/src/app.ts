// Định nghĩa interface cho một Pokemon
interface IPokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

// Định nghĩa class Pokemon để tạo các đối tượng Pokemon từ thông tin cụ thể
class Pokemon implements IPokemon {
    public id: number;
    public name: string;
    public image: string;
    public type: string;

    constructor(id: number, name: string, image: string, type: string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type;
    }
}

// Định nghĩa class PokemonManager để quản lý việc tải dữ liệu và hiển thị Pokemon
class PokemonManager {
    private pokemons: Pokemon[] = [];

    // Phương thức để trộn thứ tự của các Pokemon trong mảng
    public shuffle(): void {
        for (let i = 0; i < this.pokemons.length; i++) {
            let j: number = Math.round(Math.random() * this.pokemons.length);
            let temp = this.pokemons[i];
            this.pokemons[i] = this.pokemons[j];
            this.pokemons[j] = temp;
        }
    }

    // Phương thức để tạo template HTML cho một Pokemon
    public template(pokeItem: IPokemon): string {
        return `
        <div class="pokemon">
            <div>#$${pokeItem.id}</div>
            <img src="${pokeItem.image}" alt="${pokeItem.type}">
        </div>
        `;
    }

    // Phương thức để fetch dữ liệu từ API và hiển thị lên trang web
    public async fetchData(root: HTMLElement): Promise<void> {
        for (let i = 1; i <= 20; i++) {
            let data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            let pokemonData: any = await data.json();
            let { name: pokename, url } = pokemonData.abilities[0].ability;
            let { front_default: imageUrl } = pokemonData.sprites || {};
            let { name: type } = pokemonData.types[0].type;
            let poke = new Pokemon(i, pokename, imageUrl, type);
            this.pokemons.push(poke);
        }
        console.log(this.pokemons);
        this.shuffle();
        this.pokemons.forEach(element => {
            root.innerHTML += this.template(element);
        });
    }
}

// Lấy thẻ HTML có id là 'app'
let root = document.getElementById('app');

// Nếu có thẻ 'app', thực hiện phương thức fetchData từ PokemonManager
if (root) {
    let pokemonManager = new PokemonManager();
    pokemonManager.fetchData(root);
}
