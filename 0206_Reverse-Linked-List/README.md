# Correctness Proof

## Problem description

Constraints:

- The number of nodes in the list is the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

## Precondition

The input is a singly-linked list head, which could be null or contain nodes with integer values.

## Postcondition

The output is a new linked-list obtained by reversing the original linked-list.

## Loop invariant

### Define loop invariant

At the start of each iteration of the loop, the nodes in the sub-list starting from the original head up to the node just before current are reversed, and pre points to the last node in this reversed sub-list.

### Initialization

Before the loop starts, `pre` is set to `null`, and `current` is set to `head`. This implies that no nodes have been processed yet, and the loop invariant holds (i.e., no nodes have been reversed, and `pre` is null).

### Maintenance

At each step, we perform three actions:

1. Save the next node.
2. Update the `next` pointer of the current node to point to `pre`.
3. Move `pre` and `current` one step forward.

These actions maintain the loop invariant because:

1. The `next` pointer of the current node is updated to point to `pre`, which effectively reverses the sub-list up to `current`.
2. `pre` and `current` are updated, preparing the loop invariant for the next iteration.

### Termination

The loop terminates when `current` becomes `null`. At this point, all nodes have been processed, and `pre` points to the last node, which is now the new head of the reversed list. The loop invariant assures us that the list is correctly reversed.

## Result

By initialization, maintenance, and termination of our loop invariant, the list is correctly reversed when the loop terminates.

## Time complexity

The algorithm goes through each node in the linked-list exactly once, so the time complexity is `O(n)`, where n is the number of nodes in the list.
