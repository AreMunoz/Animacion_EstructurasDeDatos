//Stack
class stack{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    push(value){
        let newNode = { value: value, next: null };
        
        if(!this.head){
            this.head = newNode;    // We create the head
            this.tail = newNode;    // Because it's the beginning tail == head
        }
        else{                       // Already initialized 
            newNode.next = this.head;
            this.head = newNode;
        }
        return;
    }

    pop(){
        let target;
        target = this.head;                 //moving the head
        this.head = this.head.next;
        target = null;
        return;
    }

    toArray() {                     //Introduce every node to an array and return it
        const elements = [];

        let curNode = this.head;
        while(curNode){
            elements.push(curNode.value);
            curNode = curNode.next;
        }
        return elements;
    }
    top(){
        return this.head.value;
    }

    bottom(){
        return this.tail.value;
    }

    totalElements(){
        let newNode = this.head;
        let counter = 0;

        while(newNode.next != null){
            newNode = newNode.next;
            counter +=1;
        }
        return counter;
    }
}