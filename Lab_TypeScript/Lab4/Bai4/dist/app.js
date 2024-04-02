"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Định nghĩa class Pokemon để tạo các đối tượng Pokemon từ thông tin cụ thể
class Pokemon {
    constructor(id, name, image, type) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type;
    }
}
// Định nghĩa class PokemonManager để quản lý việc tải dữ liệu và hiển thị Pokemon
class PokemonManager {
    constructor() {
        this.pokemons = [];
    }
    // Phương thức để trộn thứ tự của các Pokemon trong mảng
    shuffle() {
        for (let i = 0; i < this.pokemons.length; i++) {
            let j = Math.round(Math.random() * this.pokemons.length);
            let temp = this.pokemons[i];
            this.pokemons[i] = this.pokemons[j];
            this.pokemons[j] = temp;
        }
    }
    // Phương thức để tạo template HTML cho một Pokemon
    template(pokeItem) {
        return `
        <div class="pokemon">
            <div>#$${pokeItem.id}</div>
            <img src="${pokeItem.image}" alt="${pokeItem.type}">
        </div>
        `;
    }
    // Phương thức để fetch dữ liệu từ API và hiển thị lên trang web
    fetchData(root) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 1; i <= 20; i++) {
                let data = yield fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                let pokemonData = yield data.json();
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
