export default class ToDo{
    constructor() {
        this.highList = []
        this.lowList = []
    }

    addHigh(text, status){
        this.highList.push({text:text,status:status,id:this.highList.list})
    }
    addLow(text, status){
        this.lowList.push({text:text,status:status,id:this.lowList.list})
    }

    get highArray(){
        return this.highList
    }

    get lowArray(){
        return this.lowList
    }

}