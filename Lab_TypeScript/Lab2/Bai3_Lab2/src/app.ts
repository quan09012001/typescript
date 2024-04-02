// Định nghĩa kiểu dữ liệu cho một Pokemon
let poke: {
    id: number,
    name: string,
    image: string,
    type: string
};

// Mảng chứa danh sách Pokemon
let pokemons: {
    id: number;
    name: string,
    image: string,
    type: string
}[] = [];

// Hàm để trộn thứ tự của các Pokemon trong mảng
function shuffle() {
    // Lặp qua mảng Pokemon
    for (let i = 0; i < pokemons.length; i++) {
        // Tạo một số ngẫu nhiên để chọn vị trí mới của Pokemon
        let j: number = Math.round(Math.random() * pokemons.length);

        // Tráo đổi vị trí của hai Pokemon
        let temp = pokemons[i];
        pokemons[i] = pokemons[j];
        pokemons[j] = temp;
    }
}

// Hàm tạo template HTML cho một Pokemon
function template(pokeItem: {
    id: number,
    name: string,
    image: string,
    type: string
}) {
    return `
    <div class="pokemon">
        <div>#$${pokeItem.id}</div>
        <img src="${pokeItem.image}" alt="${pokeItem.type}">
    </div>
    `;
}

// Hàm để fetch dữ liệu từ API và hiển thị lên trang web
async function fetchData(root: HTMLElement) {
    // Lặp qua 20 Pokemon đầu tiên
    for (let i = 1; i <= 20; i++) {
        // Gửi yêu cầu fetch đến API Pokemon
        let data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        
        // Chuyển đổi dữ liệu JSON từ API thành đối tượng Pokemon
        let pokemon: any = await data.json();

        // Lấy thông tin cần thiết từ đối tượng Pokemon
        let { name: pokename, url } = pokemon.abilities[0].ability;
        let { front_default: imageUrl } = pokemon.sprites || {};
        let { name: type } = pokemon.types[0].type;

        // Tạo đối tượng Pokemon mới từ thông tin lấy được
        let poke = {
            id: i,
            name: pokename,
            image: imageUrl,
            type: type
        };

        // Thêm Pokemon vào mảng
        pokemons.push(poke);
    }

    // Hiển thị mảng Pokemon đã tạo lên console
    console.log(pokemons);

    // Trộn thứ tự của mảng Pokemon
    shuffle();

    // Hiển thị mỗi Pokemon lên trang web bằng cách sử dụng template
    pokemons.forEach(Element => {
        root.innerHTML += template(Element);
    });
}

// Lấy thẻ HTML có id là 'app'
let root = document.getElementById('app');

// Nếu có thẻ 'app', thực hiện hàm fetchData
if (root) {
    fetchData(root);
}
