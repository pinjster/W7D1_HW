# You probably know the “like” system from Facebook and other pages.
#People can “like” blog posts, pictures or other items.
#We want to create the text that should be displayed next to such an item.
# Implement the function which takes an array containing the names of people that like an item.
# The given array’s names will always be valid, and will not contain any numbers or special characters.
#  It must return the display text as shown in the examples:
# []                                -->  “no one likes this”
# [“Peter”]                         -->  “Peter likes this”
# [“Jacob”, “Alex”]                 -->  “Jacob and Alex like this”
# [“Max”, “John”, “Mark”]           -->  “Max, John and Mark like this”
# [“Alex”, “Jacob”, “Mark”, “Max”]  -->  “Alex, Jacob and 2 others like this”
# Note: For 4 or more names, the number in “and 2 others” simply increases.

def like_post(arr):
    if not arr:
        return "no one likes this"
    elif len(arr) == 1:
        return f'{arr[0]} likes this'
    elif len(arr) == 2:
        return f"{arr[0]} and {arr[1]} like this"
    elif len(arr) == 3:
        return f"{arr[0]}, {arr[1]}, and {arr[2]} like this"
    else:
        return f"{arr[0]}, {arr[1]}, and {len(arr) - 2} others like this"

print(like_post([]))
print(like_post(["Peter"]))
print(like_post(["Jacob", "Alex"]))
print(like_post(["Max", "John", "Mark"]))
print(like_post(["Alex", "Jacob", "Mark", "Max"]))