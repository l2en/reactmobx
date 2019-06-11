import { observable } from 'mobx';

class AboutStore {
    @observable title = '这是mobxstore的About';
}

export default new AboutStore();