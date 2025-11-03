class Solution:
    def countFreq(self, arr, target):
        def lowerbound(arr,target):
            low=0
            high=len(arr)-1
            result=len(arr)
            while low<=high:
                mid=(low+high)//2
                if arr[mid]>=target:
                    result=mid
                    high=mid-1
                else:
                    low=mid+1
            return result
        
        def upperBound(arr,target):
            low=0
            high=len(arr)-1
            result=len(arr)
            while low<=high:
                mid=(low+high)//2
                if arr[mid]>target:
                    result=mid
                    high=mid-1
                else:
                    low=mid+1
            return result
        lower=lowerbound(arr,target)
        upper=upperBound(arr,target) 
        freq=upper-lower
        return freq

sol=Solution()
print(sol.countFreq([1,1,2,2,2,2,3],2))
            