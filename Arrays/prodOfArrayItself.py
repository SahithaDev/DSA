arr=[-1,1,0,-3,3]
arr1=[]
for i in range(0,len(arr)):
  right_prod=1
  for j  in range(i+1,len(arr)):
    right_prod=right_prod*arr[j]
  
  left_prod=1
  for k in range(i-1,-1,-1):
    left_prod=left_prod*arr[k]
  
  arr1.append(left_prod*right_prod)
print(arr1)
  
