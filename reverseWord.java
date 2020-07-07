// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


public class Kata
{
  public static String reverseWords(final String original) {
        String[] array = original.split(" ");

        if (array.length == 0) return original;

       for (int i = 0; i < array.length; i++) {
           array[i] = new StringBuilder(array[i]).reverse().toString();
       }
       return String.join(" ", array);
    }
}
