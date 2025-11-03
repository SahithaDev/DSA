nums=[1,2,2,3,1,4]
dict={}
for keys in nums:
  if keys in dict:
    dict[keys]+=1
  else:
    dict[keys]=1
print(dict)