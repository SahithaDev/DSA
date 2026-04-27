

public class Main{
  Node head;
  Node tail;
  int size;
  public  Main(){
    this.size=0;

  }
  class Node {
    int value;
    Node next;

    Node(int value){
      this.value=value;
    }
    Node(int value, Node next){
      this.value=value;
      this.next=next;
    }
  }
  public void insertNode(int val){
    Node node=new Node(val);
    node.next=head;
    head=node;
    if(tail==null){
      tail=head;
    }
    this.size++;
  }
  public void insertLast(int val ){
    if(tail==null){
      insertNode(val);
      return;
    }
    Node node=new Node(val);
    tail.next=node;
    tail=node;
    this.size++;

  }
  public void insert(int val,int index){
    if(index==0){
      insertNode(val);
      return;

    }
    Node temp=head;
    
    
    for(int i=1;i<index;i++){
      temp=temp.next;

    }
    Node node =new Node(val,temp.next);
    temp.next=node;
    size++;
  }
  public int deleteAtFirst(){
    int val=head.value;
    head=head.next;
    if(head==null){
      tail=null;
    }
    size--;
    return val;


  }
  public int deleteLast(){
    if(size<=1){
      deleteAtFirst();
    }
    Node secondLast=get(size-2);
    int val=tail.value;
    tail=secondLast;
    tail.next=null;
    return val;

  }
  public int delete(int index){
    Node prev=get(index-1);
    int val=prev.next.value;
    prev.next=prev.next.next;
    

    return val;
  }

  public Node get(int index){
    Node node=head;
    for(int i=0;i<index;i++){
      node=node.next;
    }
    return node;

  }
  
  public void display(){
    Node temp=head;
    while(temp!=null){
      System.out.print(temp.value+"->");
      temp=temp.next;
      
    }
  
    System.out.print("END");
  }

  public static void main(String[] args) {
    Main list=new Main();
    list.insertNode(3);
    list.insertNode(6);
    list.insertNode(9);
    list.insertLast(23);
    list.insert(5,2);
    list.deleteAtFirst();
    list.deleteLast();
    list.delete(2);
    list.display();
  }
}