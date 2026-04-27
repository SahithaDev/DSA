import java.util.*;

class Node{
  int val;
  Node left;
  Node right;

  Node(int val){
    this.val=val;
    this.right=null;
    this.left=null;

  }
}
public class Main{
 
  public static void inorder(Node root , ArrayList<Integer> result){
   
    if(root==null) return;
    inorder(root.left,result);
    result.add(root.val);
    inorder(root.right,result);

  }
  public static void main(String[] args) {
    Node root=new Node(6);
    root.left=new Node(10);
    root.right=new Node(12);
    ArrayList<Integer> result=new ArrayList<>();
    inorder(root,result);
    Collections.sort(result);
    System.out.println(result.get(0));
  }

}