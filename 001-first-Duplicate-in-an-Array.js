/*
* Given an array that contains only numbers, finds the first duplicate 
* number in an Array for which the second occurrence has the minimal
* index. If there are no such elements, return -1.
*/

function firstDuplicate(a) {
    // Get array's length
    aLen = a.length;
    firstDup = -1;
    // Traverse the array
    for (i = 0; i < aLen - 1; i++) {
        // Compare all elements in a[i] with a[j]
        for (j = i + 1; j < aLen; j++) {
            if (a[i] == a[j]) {
                // Checks if is the first duplicate found
                if (firstDup == -1)
                    firstDup = j;
                // Checks if the new duplicate has a second index lower
                if (j < firstDup)
                    firstDup = j;
            }
                
        }
    }
    // Return -1 if no duplicates number found, elsewise return the duplicated number
    return (firstDup == -1) ? firstDup : a[firstDup];
}
