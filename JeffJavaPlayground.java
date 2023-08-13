import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * test
 */
public class JeffJavaPlayground {
    public JeffJavaPlayground() {
    }

    @Override
    public String toString() {
        return "JavaTest{}";
    }

    public static void main(String[] args) {
        System.out.println(new JeffJavaPlayground().toString());

        String[] sa = new String [] {"abc", "cba"};
        System.out.println((Arrays.asList(sa)).stream().filter(s->s.contains("ab")).collect(Collectors.toList()));

        // In Java 8, stream().map() lets you convert an object to something else.
        List<String> collect = (Arrays.asList(sa)).stream().map(String::toUpperCase).collect(Collectors.toList());
        System.out.println(collect);

        collect = (Arrays.asList(sa)).stream().map(x -> x.hashCode()+"|"+x.toString()).collect(Collectors.toList());
        System.out.println(collect);
    }

    
    /*

     */
}
