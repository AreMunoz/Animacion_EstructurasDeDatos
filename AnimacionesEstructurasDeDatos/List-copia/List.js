//Linked List

class linkedList {
    constructor(){
        this.head = null; // First element of the list
        this.tail = null; // Last element of the list
    }

    append(value){        // adds at the end of the list
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

    appendToBeginning(value){           
        let newNode = { value: value, next: null }; 
        newNode.next = this.head;   // Swap between head and the new node
        this.head = newNode;
        return;
    }

    appendAtPosition(value, position){      // Position counting from 0
        position -= 1;                      
        let newNode = { value: value, next: null };
        let aux = this.head;

        while(position--){                  // Moving one position before the target
            aux = aux.next;
        }
        newNode.next = aux.next;            //Making space for the new node
        aux.next = newNode;
        return;
    }

    eraseAtEnd(){                           
        let aux = {value : null, next : null};
        aux = this.head;                    

        while(aux.next.next != null){      //Moving to the penultimate node
            aux = aux.next;
        }
        aux.next = null;                   //erasing the node
        return;
    }

    eraseAtPosition(position){
        position -= 1;                      
        let aux = this.head;

        while(position--){                  // Moving one position before the target
            aux = aux.next;
        }
        let target = aux.next;
        aux.next = target.next;
        target = null;
        return;
    }

    eraseAtBeginning(){                 
        let target;
        target = this.head;                 //moving the head
        this.head = this.head.next;
        target = null;
        return;
    }

    eraseByValue(value){
        let aux = {value: null, next : null};
        aux = this.head;

        if(value == this.head.value){           //If the head is the target
            this.head = this.head.next;
            aux = null;
            return;
        }
        else{                                   //Search if the next value is the target
            while(aux.next.value != value){
                aux = aux.next;
            }
            if(aux.next != null){
                let target = aux.next;          //Node we are searching for
                aux.next = target.next;         //Erasing the node
                target = null;                  
                return;
            }
            alert("Valor no encontrado");       //The value isn't in the list
            return;
        }
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

        if(this.head != null)
            while(newNode.next != null){
                newNode = newNode.next;
                counter +=1;
            }
        return counter;
    }
}



