<<<<<<< HEAD
arr=[2,7,11,15]
index_map={}
target=9
for i in range(len(arr)):
  diff=target-arr[i]
  if diff in index_map:
    print([index_map[diff],i])
    break

  
  index_map[arr[i]]=i

  







=======
arr=[2,7,11,15]
index_map={}
target=9
for i in range(len(arr)):
  diff=target-arr[i]
  if diff in index_map:
    print([index_map[diff],i])
    break

  
  index_map[arr[i]]=i

  







>>>>>>> 6f605961e3cc53780ef26fe48b2fec06acb87abc
