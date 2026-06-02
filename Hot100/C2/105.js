var getIntersectionNodeHash = function (headA, headB) {
    const visited = new Set();

    let cur = headA;
    while (cur !== null) {
        visited.add(cur);
        cur = cur.next;
    }

    cur = headB;
    while (cur !== null) {
        if (visited.has(cur)) {
            return cur;
        }
        cur = cur.next;
    }

    return null;
};

// Time: O(n + m), Space: O(n) where n and m are the lengths of the two linked lists.

var getIntersectionNodeByLength = function(headA, headB) {
  function getLength(head) {
    let len = 0;
    let cur = head;

    while (cur !== null) {
      len++;
      cur = cur.next;
    }

    return len;
  }

  let lenA = getLength(headA);
  let lenB = getLength(headB);

  let pA = headA;
  let pB = headB;

  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      pA = pA.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      pB = pB.next;
    }
  }

  while (pA !== pB) {
    pA = pA.next;
    pB = pB.next;
  }

  return pA;
};