#include <stdio.h>
int main(){
    int secondMin, secondMax , max , min,  n,i ,j,k;
    int a[100];
    printf("enter the number of elements in an array:");
    scanf("%d", &n);
    if(n<2){
        printf("second max/min is not possible\n");
    }
    for(i=0;i<n;i++){
        scanf("%d",&a[i]);
    }
    for(i=0;i<n;i++){
      for(j=i+1;j<n;j++){
        if(a[i]==a[j]){
          for(k=j;k<n-1;k++){
            a[k]=a[k+1];
          }
          n--;
          j--;
         
        }
        
      }
    }
    max=secondMax=a[0];
    min=secondMin=a[1];
    for(i=0;i<n;i++){
        if(a[i]>max){
           secondMax=max;
           max=a[i];
           
        }
        else if(a[i]>secondMax && a[i]!=max){
            secondMax=a[i];
        }
        if(a[i]<min){
          secondMin=min;
          min=a[i];
        }
        else if(a[i]<secondMin && a[i]!=min){
          secondMin=a[i];
        }
    }
    printf("array after removing duplicates:");
    for(i=0;i<n;i++){
     
      printf("%d ", a[i]);
    }
    printf("max=%d %d",max,secondMax);
    printf("min=%d %d",min,secondMin);
}
