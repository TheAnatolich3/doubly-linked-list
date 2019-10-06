const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data) {
        if(this.length == 0){
            let el = new Node(data);
            this._head = el;
            this._tail = el;
        }
        else{
            let el = new Node(data, this._tail);
            this._tail.next = el;
            this._tail = el;
        }
        this.length++;
        return this;
    }
    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let cur = this._head;
        for(let i = 0; i < index; i++){
            cur = cur.next;
        }
        return cur.data;
    }

    insertAt(index, data) {
        if(this.length == 0){
            this.append(data);
        }
        else if(index == 0){
            let el = new Node(data, null, this._head);
            this._head.prev = el;
            this._head = el;
            this.length++;
        }
        else{
            let curr = this._head;
            for(let i = 0; i < index; i++){
                curr = curr.next;
            }
            let el = new Node(data, curr.prev, curr);
            curr.prev.next = el; 
            curr.prev = el;
            this.length++;
        }
        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        if(this.length!=0){
            let cur = this._head;
            for(let i = 0; i < this.length; i++){
                cur.data = null;
                cur = cur.next;
            }
            this.length=0;
        }
        return this;
    }

    deleteAt(index) {
        let item = this._head;
        if(index == 0 && item.next != null){
            item = item.next;
            this._head = item;
        }
        else if (index == 0 && this._head == this._tail){

        }
        else if(index == this.length - 1){
            item = this._tail;
            item = item.prev;
            this._tail = item;
        }
        else{
            let t1;
            for(let i = 0; i < index; i++){
                item = item.next;
            }
            item.prev.next = item.next;
            item.next.prev = item.prev;
        }
        this.length--;
        return this;
    }

    reverse() {
        if(this._head != null){
            let start = this._head;
            let end = this._tail;
            for(let i = 0, j = this.length-1; i < j;i++,j--){
                let buf = start.data;
                start.data = end.data;
                end.data = buf;
                start = start.next;
                end = end.prev;
            }
        }
        return this;
    }

    indexOf(temp) {
        let curr = this._head;
        let index = 0;
        for(let i = 0; i < this.length; i++){
            if(curr.data == temp){
                return index;
            }
            index++;
            curr = curr.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
