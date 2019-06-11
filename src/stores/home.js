import { observable, action } from 'mobx';
import HomeApi from 'api/home';

const HomeStore = observable( {
    title: '这是mobx的Home',
    list: [],
    async getList(){
        this.list = await HomeApi.getList();
    }
} );

export default HomeStore;