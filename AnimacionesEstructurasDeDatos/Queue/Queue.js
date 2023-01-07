//Stack
class queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueue(value){     //Always adding to the end
        let newNode = { value: value, next: null };
        
        if(!this.head){
            this.head = newNode;    // We create the head
            this.tail = newNode;    // Because it's the beginning tail == head
        }
        else{                       // Already initialized 
            this.tail.next = newNode;   
            this.tail = this.tail.next;
        }
        return;
    }

    dequeue(){
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