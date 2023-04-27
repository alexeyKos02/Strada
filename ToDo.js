export default class ToDo{
    constructor() {
        this.highList = []
        this.lowList = []
    }

    addHigh(text, status){
        this.highList.push({text:text,status:status,id:this.highList.length})
    }
    addLow(text, status){
        this.lowList.push({text:text,status:status,id:this.lowList.length})
    }

    get highArray(){
        return this.highList
    }

    get lowArray(){
        return this.lowList
    }
    deleteHigh(id){
        this.highList = this.highList.filter(deal => deal.id !== Number(id))
    }
    deleteLow(id){
        this.lowList = this.lowList.filter(deal => deal.id !== Number(id))
    }
}