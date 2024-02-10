def lengthOfLongestSubstring(s):
    # Initialize a character map to store the last index of each character
    charMap = {}
    for i in range(256):
        charMap[i] = -1
    
    # Initialize pointers and max length variables
    i = max_len = 0
    
    # Iterate through the string
    for j in range(len(s)):
        # Check if the current character has already been seen in the current substring
        # If yes, update the starting pointer (i) to the next index of the duplicate character
        if charMap[ord(s[j])] >= i:
            i = charMap[ord(s[j])] + 1
        
        # Update the last index of the current character in the character map
        charMap[ord(s[j])] = j
        
        # Update the maximum length if a longer substring is found
        max_len = max(max_len, j - i + 1)
    
    # Return the maximum length of the substring without repeating characters
    return max_len

# Example usage
result = lengthOfLongestSubstring("abcabcbb")
print(result)  # Output: 3
