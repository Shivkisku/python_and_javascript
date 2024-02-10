class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def addTwoNumbers(l1, l2):
    carry = 0
    # dummy head
    head = curr = ListNode(0)
    
    while l1 or l2:
        val = carry
        if l1:
            val += l1.val
            l1 = l1.next
        if l2:
            val += l2.val
            l2 = l2.next
        curr.next = ListNode(val % 10)
        curr = curr.next
        carry = val // 10
    
    if carry > 0:
        curr.next = ListNode(carry)
    
    return head.next

# Example usage
if __name__ == "__main__":
    # Creating two linked lists
    l1 = ListNode(2, ListNode(4, ListNode(3)))
    l2 = ListNode(5, ListNode(6, ListNode(4)))

    # Calling the addTwoNumbers function
    result = addTwoNumbers(l1, l2)

    # Printing the result
    while result:
        print(result.val, end=" ")
        result = result.next
