arr=[2,7,11,15]
found=False
for i in range(0,len(arr)):
  for j in range(0,len(arr)):
    if(arr[i]+arr[j]==9):
      print(i,j)
      found=True
    
  if found:
    
    break

      

