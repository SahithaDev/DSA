public class DoublyLL {
  Node head;
  Node tail;
  int size;
  public DoublyLL(){
    this.size=0;
  }

  
  class Node{
    int value;
    Node next;
    Node prev;
    Node(int value){
      this.value=value;
    }
    Node(int value, Node next,Node prev){
      this.value=value;
      this.next=next;
      this.prev=prev;
    }
  }
  public void insertAtFirst(int val){
    Node node=new Node(val);
    node.next=head;
    node.prev=null;
    if(head!=null){
      head.prev=node;
    }
    head=node;
    size++;
    


  }
  public void insertAtLast(int val){
    Node node=new Node(val);
    if(tail==null){
      insertAtFirst(val);
      return;
    }
    
    node.prev=tail;
    tail.next=node;
    node.next=null;
    


  }
  public void display(){
    Node temp=head;
    Node last=null;
    while(temp!=null){
      
      System.out.print(temp.value+"-->");
      last=temp;
      temp=temp.next;
    }
    System.out.println("end");

    System.out.println("print in reverse");
    while(last!=null){
      
      System.out.print(last.value+"-->");
      last=last.prev;
    }
    System.out.print("start");
  }
  


  

public static void main(String[] args){
  DoublyLL list= new DoublyLL();
  list.insertAtFirst(23);
  list.insertAtFirst(46);
  list.insertAtFirst(32);
  list.insertAtFirst(12);
  list.insertAtLast(99);
  list.display();



}
}

