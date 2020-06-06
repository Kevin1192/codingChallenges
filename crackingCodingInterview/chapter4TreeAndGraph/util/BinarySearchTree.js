class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if (this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if (value === current.value) return undefined; // duplicate value are ignored
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value){
        let current = this.root;
        while (current){
            if (value === current.value) return current;
            if (value < current.value) current = current.left
            else current = current.right;
        }
        return undefined;
    }
    BFS(){
        var node = this.root,
            data = [],
            queue = [];
            queue.push(node);

        while (queue.length){
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data;
    }
    DFSPreOrder(){
        const data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        const data = [];
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        const data = [];
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value);
            if(node.right) traverse(node.right)
        }
        traverse(this.root);
        return data;
    }
}