#include <stdio.h>
int main(){
  int n,i;
  int isPalindrome=1;
  printf("enter the number of elements",n);
  scanf("%d",&n);
  int a[n];
  for(i=0;i<n;i++){
    scanf("%d",&a[i]);
  }
  for(i=0;i<n/2;i++){
    if(a[i]!=a[n-i-1]){
      isPalindrome=0;
      break;

    }
   
  }
   if(isPalindrome==0){
      printf("no");
    }
    else{
      printf("yes");
    }
}