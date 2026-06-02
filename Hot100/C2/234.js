var isPalindrome = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let cur = slow;

    while (cur !== null) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    let left = head;
    let right = prev;

    while (right !== null) {
        if (left.val !== right.val) {
            return false;
        }

        left = left.next;
        right = right.next;
    }

    return true;
};

// Time: O(n), Space: O(1) where n is the length of the linked list.
var isPalindromeArray = function (head) {
    const values = [];
    let cur = head;

    while (cur !== null) {
        values.push(cur.val);
        cur = cur.next;
    }

    let left = 0;
    let right = values.length - 1;

    while (left < right) {
        if (values[left] !== values[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};