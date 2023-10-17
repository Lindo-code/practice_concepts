class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(1);
const num1 = new Node(6);
const num2 = new Node(2);
const num3 = new Node(5);

root.right = num1;              
num1.left = num2;
num2.right = num3;

function preorderTraversal(node){
    const stack = [];
    const result = [];
    if(node) stack.push(node)
    while (stack.length > 0) {
        const currentNode = stack.pop();
        console.log(currentNode.value)
        result.push(currentNode.value)
        if(currentNode.right) stack.push(currentNode.right);
        if(currentNode.left) stack.push(currentNode.left);

    }
    return result;
}
preorderTraversal(root)
