Vue.component('item', {

    template: //html
    `
    <div class="changer p-5" :style="{'transition': 'background-color .5s'}" :class="color">
        <div class="items p-5">
            <div>
                <h2>Introduzca un color de fondo de bootstrap:</h2>
                <input type="text" class="form-control" v-model="color">
                <p>Cambia los colores del fondo en tiempo real!!</p>
                <p>ej: <span style="font-weight: bold">bg-dark, bg-success...</span></p>
            </div>
        </div>
    </div>
    `,
    data(){
        return {
            color: '',
        }
    },
})