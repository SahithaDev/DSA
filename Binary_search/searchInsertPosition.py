class Solution(object):
    def searchInsert(self, nums, target):
        def upperBound(nums,target):
            low=0
            high=len(nums)-1
            while low<=high:
                mid=(low+high)//2
                if(nums[mid]==target):
                    result=mid
                elif(nums[mid]<target):
                    low=mid+1
                else:
                    high=mid-1
            return low
        

sol=Solution()
print(sol.searchInsert([1,3,5,6],5))

        