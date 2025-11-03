import time

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        print(f"Pass {i+1}: {arr}")
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                print(f"  Swapped {arr[j+1]} and {arr[j]}: {arr}")
                time.sleep(0.5)  # To simulate step delay

arr = [5, 3, 8, 1, 2]
print("Initial array:", arr)
bubble_sort(arr)
print("Sorted array:", arr)
