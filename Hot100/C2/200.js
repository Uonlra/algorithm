var reverseList = function (head) {
    let prev = null;
    let cur = head;

    while (cur !== null) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
};
// Time: O(n), Space: O(1) where n is the length of the linked list.

var reverseListRecursive = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    const newHead = reverseListRecursive(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
};