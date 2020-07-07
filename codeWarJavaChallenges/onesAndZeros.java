// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

import java.util.List;

public class BinaryArrayToNumber {

    // self-attempt 
    // using math formula: 8(2**3) * 1/0 + 4(2**2) * 1/0 + 2(2**1) * 1/0 + 1(2**0) * 1/0
    public static int ConvertBinaryArrayToInt(List<Integer> binary) {
        // Your Code
        int value = 0;
        int n = binary.size() - 1;
        for (int i = binary.size() - 1; i >= 0; i--) {
            value += binary.get(i) * (Math.pow(2, n - i));
        }
        return value;
    }


    // using stream.reduce()

    public static int ConvertBinaryArrayToInt2(List<Integer> binary) {
        return binary.stream().reduce((x, y) -> x * 2 + y).get();
    }
}