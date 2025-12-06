<<<<<<< HEAD
arr=[1,7,3,6,5,6]
found= False
for pivot in range(0,len(arr)):
  leftSum=0
  for i in range(0,pivot):
    leftSum+=arr[i]
  rightSum=0
  for j  in range(pivot+1,len(arr)):
    rightSum+=arr[j]


    if (leftSum==rightSum):
        
        print(pivot)
        found=True

if(found!=True):
   print("-1")

  
  

 
 

    

=======
arr=[1,7,3,6,5,6]
found= False
for pivot in range(0,len(arr)):
  leftSum=0
  for i in range(0,pivot):
    leftSum+=arr[i]
  rightSum=0
  for j  in range(pivot+1,len(arr)):
    rightSum+=arr[j]


    if (leftSum==rightSum):
        
        print(pivot)
        found=True

if(found!=True):
   print("-1")

  
  

 
 

    

>>>>>>> 6f605961e3cc53780ef26fe48b2fec06acb87abc
