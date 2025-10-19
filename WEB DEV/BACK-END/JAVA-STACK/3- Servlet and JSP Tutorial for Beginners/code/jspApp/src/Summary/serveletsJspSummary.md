**Servlet** and **JSP (JavaServer Pages)** are both Java-based technologies used to develop web applications. They are part of the Java EE (Enterprise Edition) specification and help in building dynamic, server-side web content.

### **Servlet:**
A **Servlet** is a Java class that runs on a web server and handles HTTP requests and responses. It extends the functionality of a web server by generating dynamic content, usually in the form of HTML. The servlet is invoked by a client (e.g., a browser) via a request, and it processes that request to produce a response.

- **Main Purpose:** Servlets are used to handle HTTP requests, manage sessions, and generate dynamic content like HTML, JSON, etc.
- **Life Cycle:** A servlet’s life cycle involves loading by the server, handling requests (doGet, doPost), and unloading when no longer needed.
- **Processing Flow:** The client sends a request to the server, which invokes a servlet. The servlet processes the request, performs any necessary logic (such as database queries), and generates a response that is sent back to the client.

**Example:**
```java
@WebServlet("/HelloWorld")
public class HelloWorldServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().write("Hello, World!");
    }
}
```

### **JSP (JavaServer Pages):**
**JSP** is a technology that helps developers create dynamic web pages using HTML, XML, or other document types, embedded with Java code. Unlike servlets, which require writing Java code for the entire response, JSP allows embedding Java directly in the HTML using special tags.

- **Main Purpose:** JSP is used to separate the presentation layer (HTML) from the business logic (Java code). It simplifies the creation of dynamic web content by allowing developers to write HTML and Java in the same file.
- **How it Works:** The JSP file is translated into a servlet by the server, which is then executed to generate the dynamic content. This means JSP is essentially a high-level abstraction over servlets.
- **Components:** It supports features like tag libraries, expressions, scriptlets, and custom tags, which make it easier to handle dynamic content generation.

**Example:**
```jsp
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<html>
<body>
    <h1>Hello, <%= request.getParameter("name") %>!</h1>
</body>
</html>
```
In this example, Java code is embedded inside the HTML using the `<%= %>` tags to print out the value of the "name" parameter from the request.

### **Key Differences:**
1. **Servlets** are Java classes that handle requests and generate dynamic content programmatically, while **JSP** allows embedding Java code inside HTML, simplifying the development of dynamic pages.
2. **Servlets** give more control over the request-response flow and are more suitable for complex logic, whereas **JSP** is more suitable for rendering views and separating presentation from business logic.
3. Servlets are more suitable for processing logic, and JSP is mainly used for presentation (view).

In many Java-based web applications, both technologies are often used together: servlets handle the business logic and request processing, while JSP handles the presentation layer.

**JSP (JavaServer Pages)** and **Servlets** are often used together to build web applications, with each serving a distinct role in the overall architecture:

### **How JSP and Servlets Work Together:**

1. **Servlets:**
    - **Role:** Servlets handle the request and response flow of the application. They manage the business logic, handle client requests, interact with databases or other services, and generate dynamic content. They are the controller in the traditional Model-View-Controller (MVC) design pattern.
    - **Example:** A servlet might handle user authentication, process form submissions, or manage session data. It can then forward or redirect the request to a JSP page to render the response.

2. **JSP:**
    - **Role:** JSP is primarily used to render the presentation (view) layer of the application. It is where the HTML is generated dynamically, often based on the data passed from the servlet.
    - **Example:** After the servlet processes the user input, it might forward the request to a JSP that will display the result, such as showing a confirmation message or displaying data fetched from a database.

### **Typical Workflow of JSP and Servlets Together:**

1. **Request Processing:**
    - A client (e.g., a web browser) sends an HTTP request to the server (such as submitting a form or clicking a link).
    - The request is first handled by a **Servlet**. The servlet processes the request, which could involve validating input, querying a database, or executing business logic.

2. **Forwarding Data to JSP:**
    - Once the servlet has processed the request, it prepares any necessary data and forwards the request to a **JSP** for rendering. This is typically done using the `RequestDispatcher` to forward the request and any data (usually in the form of attributes) to the JSP.
    - The servlet does not generate HTML itself. Instead, it passes the necessary information to the JSP, which is responsible for generating the HTML content.

3. **Rendering the View:**
    - The **JSP** takes the data provided by the servlet (usually in the form of request attributes or session variables) and uses it to dynamically generate the HTML response. The HTML is then sent back to the client (browser).
    - **JSP** focuses on the view (presentation) layer and can include Java code (though it is typically better to minimize this code in favor of using tag libraries or other techniques).

### **Example:**
#### 1. **Servlet:**
```java
@WebServlet("/processLogin")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Business logic, such as checking credentials
        if ("admin".equals(username) && "password123".equals(password)) {
            request.setAttribute("message", "Login successful!");
            // Forward to JSP to display the message
            request.getRequestDispatcher("/welcome.jsp").forward(request, response);
        } else {
            request.setAttribute("message", "Invalid credentials!");
            request.getRequestDispatcher("/login.jsp").forward(request, response);
        }
    }
}
```

#### 2. **JSP (welcome.jsp):**
```jsp
<html>
<body>
    <h1>${message}</h1>
</body>
</html>
```

#### 3. **JSP (login.jsp):**
```jsp
<html>
<body>
    <h1>${message}</h1>
    <form action="processLogin" method="post">
        Username: <input type="text" name="username" /><br>
        Password: <input type="password" name="password" /><br>
        <input type="submit" value="Login" />
    </form>
</body>
</html>
```

### **Advantages of Using Both Together:**

1. **Separation of Concerns:** Servlets handle the business logic, and JSP handles the presentation. This separation makes it easier to maintain and extend the application.

2. **Flexibility:** Servlets can process complex requests, while JSP provides a simpler way to display dynamic content (like HTML, tables, forms, etc.).

3. **Maintainability:** By separating the view (JSP) and the controller/business logic (Servlet), it becomes easier to modify either layer without affecting the other. For example, you can change the presentation (JSP) without touching the logic (Servlet), and vice versa.

4. **MVC Architecture:** Servlets and JSP can be part of the **Model-View-Controller (MVC)** design pattern, where:
    - **Model:** The business logic and data (handled by Servlets).
    - **View:** The user interface (handled by JSP).
    - **Controller:** The flow control (often handled by Servlets).

### **In Summary:**
JSP and Servlets are often used together in Java web applications to separate business logic (Servlets) and presentation logic (JSP). Servlets handle requests, process data, and manage the flow, while JSP is responsible for rendering the HTML content based on the data passed to it. This combination allows for a more organized and maintainable approach to building web applications.

### **JSP Application Architecture**

A JSP (JavaServer Pages) application follows a **client-server architecture** where the client sends requests, and the server processes them to generate dynamic responses. Below is a detailed explanation of the architecture:

---

### **1. Client Tier (Presentation Layer)**

This layer includes web browsers or any client capable of sending HTTP requests. It acts as the user interface.

- **Role**: Sends HTTP requests (e.g., clicking a button, submitting a form).
- **Tools**: Browsers (Chrome, Firefox, etc.).
- **Data Flow**:
    - Request: `HTTP GET` or `HTTP POST` to the server.
    - Response: Receives dynamically generated HTML content.

---

### **2. Server Tier (Middle Layer)**

The core of the JSP architecture resides on the server, where the Apache Tomcat server manages requests and processes JSPs and Servlets.

#### a. **Web Server/Servlet Container (Tomcat)**

- **Role**:
    - Acts as the environment where JSPs and Servlets are deployed.
    - Manages requests from the client and forwards them to the appropriate components.
- **Processes**:
    - Routes requests based on URLs.
    - Converts JSPs into servlets and compiles them if necessary.

#### b. **JSP Layer**

- **Role**: Handles the presentation logic, dynamically generating content (HTML/CSS/JavaScript) based on user input or business data.
- **Lifecycle**:
    - Request handling via servlets.
    - JSP is translated into a servlet.
    - Servlet generates the response.

#### c. **Servlets**

- **Role**: Servlets act as the controller in the MVC (Model-View-Controller) architecture.
- **Functions**:
    - Manage business logic.
    - Process form submissions.
    - Interact with JavaBeans and databases.
    - Forward requests to JSPs for response generation.

#### d. **JavaBeans or Service Layer**

- **Role**: JavaBeans encapsulate the business logic and data.
- **Usage**:
    - Retrieve or process data (e.g., calculate totals, validate user input).
    - Interact with the database layer.

---

### **3. Data Tier (Database Layer)**

This layer handles data storage and retrieval for the application.

- **Components**:
    - Relational databases (MySQL, Oracle, etc.).
- **Functions**:
    - Store user details, session data, and business information.
    - Provide data to JavaBeans or Servlets when requested.

---

### **Workflow of a JSP Application**

1. **Client Request**:
    - A user accesses a web page, submits a form, or clicks a button.
    - The browser sends an HTTP request to the server.

2. **Server Routing**:
    - The Tomcat server identifies the requested resource (e.g., `/login.jsp`).
    - Routes the request to the appropriate JSP or Servlet.

3. **Servlet/JSP Processing**:
    - For JSPs:
        - The JSP is compiled into a servlet if it hasn't been already.
        - The servlet processes the request, generating dynamic HTML.
    - For Servlets:
        - The servlet handles logic (e.g., form processing) and may forward the request to another JSP for response generation.

4. **Database Interaction**:
    - If required, servlets or JavaBeans query the database and retrieve data.
    - The retrieved data is processed and passed to the JSP.

5. **Response Generation**:
    - The JSP or Servlet generates the final HTML page and sends it back to the browser.

6. **Client Displays Response**:
    - The browser renders the received HTML content.

---

### **Diagram Summary (Text-Based)**

```plaintext
Client (Browser)
   ↓
HTTP Request (GET/POST)
   ↓
Apache Tomcat Server
   ↓
Request Routed to JSP or Servlet
   ↓
Servlet (Controller) <--> JavaBeans (Business Logic) <--> Database
   ↓
Response Generated by JSP (View)
   ↓
HTTP Response (HTML)
   ↓
Client (Browser Renders Content)
```

---

##  Rebuild and Redeploy
```bash
mvn clean install
```

## Example 1 : add two numbers 

1. *index.html* 
```html
<!DOCTYPE html>
<html lang="en">
<body>
<h1>hello world</h1>

<!--
send a  request to the add servlet 
with a  get method by default 
get : send parameters in the url section 
like this format 
localhost:8080/add?num1=1&num2=4; 
-->
<form action="/add" class="additionForm">

    <input type="number" name="num1" placeholder="Enter the First Number">
    <input type="number" name="num2" placeholder="Enter the Second Number">

    <input type="submit">

</form>


<style>
    .additionForm {
        display: flex;
        flex-direction: column;

        justify-content: center;
        gap: 10px;
        padding:  20px;

         >input{
             border: 1px solid black;
             padding: 10px 15px;
             width: fit-content;
             border-radius: 10px;

         }
    }
</style>


</body>
</html>
```

2. *AdditionServlet.js*

2.1 using the service function 
```java


// specify the target route `add`
@WebServlet("/add")
public class AdditionServlet extends HttpServlet {

    
    // the service is a function invoked when the additionServlet called 
    //it's the function responsible for handling the request either get or post 
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse res) throws IOException {
        int num1 = Integer.parseInt(req.getParameter("num1"));
        int num2 = Integer.parseInt(req.getParameter("num2"));
        int result = num1 + num2;
        
        // Send response back to the client
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<h1>Result: " + result + "</h1>");
    }
    
}
```
2.2 using the doPost and the doGet functions:

Use doGet for handling requests sent through the GET method.
Use doPost for handling requests sent through the POST method.
Extract the common logic into a helper method to reduce code duplication.
```java

@WebServlet("/AdditionServlet")
public class AdditionServlet extends HttpServlet {

    private void handleRequest(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();
        try {
            // Retrieve parameters from request
            String num1 = request.getParameter("num1");
            String num2 = request.getParameter("num2");

            // Parse parameters to integers
            int number1 = Integer.parseInt(num1);
            int number2 = Integer.parseInt(num2);

            // Perform addition
            int sum = number1 + number2;

            // Display result
            out.println("<html><body>");
            out.println("<h1>Result: " + sum + "</h1>");
            out.println("</body></html>");

        } catch (NumberFormatException e) {
            out.println("<html><body>");
            out.println("<h1>Error: Invalid input. Please enter valid numbers.</h1>");
            out.println("</body></html>");
        } finally {
            out.close();
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        handleRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        handleRequest(request, response);
    }
}
```
# calling a servlet in a servlet
1. request dispatcher 

```java
@WebServlet("/add")
public class AdditionServlet extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

            RequestDispatcher rd = req.getRequestDispatcher("/sq");
        req.setAttribute("name", "ayoub");
            rd.forward(req, res);

    }
    
}
```

```java
@WebServlet("/sq")
public class sqServlet extends HttpServlet {
    @Override
    protected void doGet(jakarta.servlet.http.HttpServletRequest req, jakarta.servlet.http.HttpServletResponse res) throws IOException {
        String name = (String) req.getAttribute("name");
        PrintWriter out = res.getWriter();
        out.println("my name is  : " + name);

    }

}
```
2. redirect : 
```java
@WebServlet("/add")
public class AdditionServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        req.setAttribute("name", "ayoub");
        res.sendRedirect("sq?name=ayoub");

    }

}
```

```java
@WebServlet("/sq")
public class sqServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        String name = (String) req.getParameter("name");
        System.out.println("the name getting from the addition servlet function :  "+name);
        PrintWriter out = res.getWriter();
        System.out.println("the name "+name);
        out.println("my name is  : " + name);


    }

}
```
## sending the data using a session :
```java
@WebServlet("/add")
public class AdditionServlet extends HttpServlet {
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

         int num1 = Integer.parseInt(req.getParameter("num1"));
         int num2 = Integer.parseInt(req.getParameter("num2"));
         int sum = num1 + num2;
        System.out.println("the sum :" +sum);

        HttpSession  session = req.getSession();
        session.setAttribute("sum", sum);
        res.sendRedirect("sq");


    }

}
```

```java
@WebServlet("/sq")
public class sqServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        HttpSession session = req.getSession();
       int sum = 0;
        try{
             sum = (int) session.getAttribute("sum");
        }catch (Exception e){

        }

        PrintWriter out = res.getWriter();
        System.out.println("the sum"+sum);
        out.println("the sum :" + sum);
    }

}
```

## sending the data using a cookie :
```java
@WebServlet("/add")
public class AdditionServlet extends HttpServlet {
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

         int num1 = Integer.parseInt(req.getParameter("num1"));
         int num2 = Integer.parseInt(req.getParameter("num2"));
         int sum = num1 + num2;
        Cookie cookie = new Cookie("sum", String.valueOf(sum));
        res.addCookie(cookie);

        res.sendRedirect("sq");


    }

}


```
```java
@WebServlet("/sq")
public class sqServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {

       Cookie[] cookies= req.getCookies();
        PrintWriter out = res.getWriter();
       if(cookies==null){
          out.println("there is no cookies");
          return;
       }
        Optional<Cookie>  sumCookie=Arrays.stream(cookies).filter((cookie)-> cookie.getName().equals("sum")).findFirst();
        if(sumCookie.isPresent()){

            try{
                int sum = Integer.parseInt(sumCookie.get().getValue());

                System.out.println("the sum"+sum);
                out.println("the sum :" + sum);
            }catch (Exception e){
                out.println("an error occurred while parsing the sum");
            }

        }


    }

}
```
When you use a `<form>` to submit data to a servlet, the behavior depends on how the form is configured and how the servlet handles the request. Let’s break it down:

---

### **1. Form Submission and URL Changes**
When you submit a form, the browser sends an HTTP request (GET or POST) to the URL specified in the `action` attribute of the form. This causes the browser to navigate to that URL, which can make it seem like the servlet is a "page."

#### Example:
```html
<form action="myServlet" method="GET">
    <input type="text" name="username" placeholder="Enter your name">
    <button type="submit">Submit</button>
</form>
```

- If the user enters "John" and submits the form, the browser will navigate to:
  ```
  http://yourserver/myServlet?username=John
  ```
- The servlet processes the request and sends back a response (e.g., HTML, plain text, JSON, etc.).
- The browser displays the response, which replaces the current page.

---

### **2. Is the Servlet Considered a Page?**
Yes, in this context, the servlet acts like a "page" because:
- The browser navigates to the servlet's URL.
- The servlet generates a response (e.g., HTML) that the browser renders as a new page.

However, a servlet is not inherently a "page." It’s a Java class that handles HTTP requests and generates responses. The response can be:
- **HTML**: Rendered as a web page.
- **Plain text**: Displayed as-is in the browser.
- **JSON**: Used by JavaScript for dynamic updates.
- **Other content types**: Like images, PDFs, etc.

---

### **3. Validation and URL Changes**
If you want to perform client-side validation before submitting the form, you can use JavaScript to prevent the form submission if validation fails. This prevents the URL from changing unless the form data is valid.

#### Example with Validation:
```html
<form action="myServlet" method="GET" onsubmit="return validateForm()">
    <input type="text" name="username" placeholder="Enter your name" required>
    <button type="submit">Submit</button>
</form>

<script>
    function validateForm() {
        const username = document.querySelector('input[name="username"]').value;
        if (username.trim() === "") {
            alert("Username cannot be empty!");
            return false; // Prevent form submission
        }
        return true; // Allow form submission
    }
</script>
```

- If the validation fails, the form is not submitted, and the URL does not change.
- If the validation passes, the form is submitted, and the browser navigates to the servlet's URL.

---

### **4. Avoiding URL Changes (Using AJAX)**
If you don’t want the browser to navigate to the servlet's URL (i.e., you want to stay on the same page), you can use **AJAX** (e.g., `fetch` or `XMLHttpRequest`) to send the form data to the servlet without reloading the page.

#### Example with `fetch`:
```html
<form id="myForm">
    <input type="text" name="username" placeholder="Enter your name" required>
    <button type="button" onclick="submitForm()">Submit</button>
</form>

<script>
    async function submitForm() {
        const form = document.getElementById('myForm');
        const formData = new FormData(form);

        try {
            const response = await fetch('myServlet', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.text();
            alert('Response from servlet: ' + data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
</script>
```

- The form data is sent to the servlet using `fetch`.
- The browser does not navigate to the servlet's URL.
- The response from the servlet is handled dynamically (e.g., displayed in an alert or updated in the DOM).

---

### **5. Key Differences**
| **Approach**       | **URL Changes?** | **Page Reload?** | **Use Case**                                   |
|---------------------|------------------|------------------|-----------------------------------------------|
| **Form Submission** | Yes              | Yes              | Traditional form submissions, full page reload. |
| **AJAX (`fetch`)**  | No               | No               | Dynamic updates, single-page applications.     |

---

### **6. When to Use Each Approach**
- **Use Form Submission**:
    - When you want the user to navigate to a new page (e.g., after submitting a login form).
    - When you don’t need dynamic updates or JavaScript.

- **Use AJAX (`fetch`)**:
    - When you want to stay on the same page and update content dynamically.
    - When you need to handle the response programmatically (e.g., display a message without reloading the page).

---

### **Summary**
- A servlet can act like a "page" if it returns HTML and the browser navigates to its URL.
- Use **form submission** for traditional navigation and full-page reloads.
- Use **AJAX (`fetch`)** for dynamic updates without changing the URL or reloading the page.


## **1. Introduction to JSP**

### **What is JSP?**
- **JSP (JavaServer Pages)** is a technology used to create dynamic web pages in Java.
- It allows you to embed Java code directly into HTML using special tags.
- JSP pages are compiled into servlets by the JSP container (e.g., Apache Tomcat) at runtime.

### **Why Use JSP?**
- **Separation of Concerns**: JSP allows you to separate presentation (HTML) from business logic (Java).
- **Ease of Use**: Writing HTML in JSP is easier than generating HTML in servlets using `PrintWriter`.
- **Reusability**: JSP supports custom tags and tag libraries (e.g., JSTL) for reusable components.

### **How JSP Works**
1. A client requests a JSP page (e.g., `index.jsp`).
2. The JSP container translates the JSP page into a servlet.
3. The servlet is compiled and executed.
4. The output (HTML) is sent back to the client.

---

## **2. JSP Tags**

JSP provides several types of tags to embed Java code, control flow, and reuse components. These tags are categorized into three main types:

1. **Scripting Elements**
2. **Directives**
3. **Action Tags**

Let’s explore each category in detail.

---

### **1. Scripting Elements**
Scripting elements allow you to embed Java code directly in JSP.

#### **a. `<% ... %>` (Scriptlet)**
- Used to write Java code.
- The code inside this tag is placed in the `_jspService` method of the generated servlet.

```jsp
<%
    String name = "John";
    out.println("Hello, " + name);
%>
```

#### **b. `<%= ... %>` (Expression)**
- Used to output the result of a Java expression.
- The expression is evaluated, and the result is converted to a string and displayed.

```jsp
<p>Welcome, <%= name %>!</p>
```

#### **c. `<%! ... %>` (Declaration)**
- Used to declare variables or methods.
- The code inside this tag is placed outside the `_jspService` method (i.e., at the class level).

```jsp
<%!
    int count = 0;

    void incrementCount() {
        count++;
    }
%>
<%
    incrementCount();
    out.println("Count: " + count);
%>
```

---

### **2. Directives**
Directives provide global information about the JSP page, such as importing classes or specifying error pages.

#### **a. `<%@ page ... %>` (Page Directive)**
- Defines page-specific attributes.

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.Date" %>
```

Common attributes:
- `language`: Specifies the scripting language (default is Java).
- `contentType`: Defines the MIME type and character encoding.
- `import`: Imports Java classes or packages.
- `errorPage`: Specifies the error page for this JSP.

#### **b. `<%@ include ... %>` (Include Directive)**
- Includes the content of another file (e.g., HTML, JSP) at translation time.

```jsp
<%@ include file="header.jsp" %>
```

#### **c. `<%@ taglib ... %>` (Taglib Directive)**
- Used to include custom tag libraries (e.g., JSTL).

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
```

---

### **3. Action Tags**
Action tags are used to perform specific tasks, such as including content, forwarding requests, or working with JavaBeans.

#### **a. `<jsp:include>`**
- Includes the content of another file at runtime.

```jsp
<jsp:include page="header.jsp" />
```

#### **b. `<jsp:forward>`**
- Forwards the request to another resource (e.g., JSP, servlet).

```jsp
<jsp:forward page="welcome.jsp" />
```

#### **c. `<jsp:useBean>`**
- Instantiates or accesses a JavaBean.

```jsp
<jsp:useBean id="user" class="com.example.User" scope="session" />
```

#### **d. `<jsp:setProperty>`**
- Sets the properties of a JavaBean.

```jsp
<jsp:setProperty name="user" property="name" value="John" />
```

#### **e. `<jsp:getProperty>`**
- Retrieves the properties of a JavaBean.

```jsp
<jsp:getProperty name="user" property="name" />
```

---

## **3. JSP Implicit Objects**
JSP provides several implicit objects that you can use without declaring them. These objects are automatically available in JSP pages.

| **Object**       | **Type**                  | **Description**                                      |
|-------------------|---------------------------|------------------------------------------------------|
| `request`        | `HttpServletRequest`      | Represents the HTTP request.                         |
| `response`       | `HttpServletResponse`     | Represents the HTTP response.                        |
| `out`            | `JspWriter`               | Used to write output to the client.                  |
| `session`        | `HttpSession`             | Represents the user session.                         |
| `application`    | `ServletContext`          | Represents the application context.                  |
| `config`         | `ServletConfig`           | Represents the servlet configuration.                |
| `pageContext`    | `PageContext`             | Provides access to all JSP implicit objects.         |
| `page`           | `Object`                  | Refers to the current JSP page (like `this`).        |
| `exception`      | `Throwable`               | Available in error pages to handle exceptions.       |

---

## **4. Example: Complete JSP Page**

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.Date" %>
<!DOCTYPE html>
<html>
<head>
    <title>Welcome Page</title>
</head>
<body>
    <h1>Welcome to JSP!</h1>
    <%
        String name = request.getParameter("name");
        if (name == null) {
            name = "Guest";
        }
    %>
    <p>Hello, <%= name %>!</p>
    <p>Current Date: <%= new Date() %></p>

    <jsp:include page="footer.jsp" />
</body>
</html>
```

---

## **5. Example: Complete JSP Page**
Sure! Let’s start with a **complete example of a JSP page** and then discuss the tags used in it. I'll keep it simple and avoid going into too much detail about `taglib` for now.

---

### **index.jsp**
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Welcome Page</title>
</head>
<body>
    <h1>Welcome to JSP!</h1>

    <!-- Form to take user input -->
    <form action="welcome.jsp" method="GET">
        <label for="name">Enter your name:</label>
        <input type="text" id="name" name="name">
        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

### **welcome.jsp**
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <h1>Welcome Page</h1>

    <%
        // Retrieve the name from the request
        String name = request.getParameter("name");

        // If no name is provided, use "Guest"
        if (name == null || name.trim().isEmpty()) {
            name = "Guest";
        }
    %>

    <p>Hello, <%= name %>!</p>
    <p>Thank you for visiting our website.</p>

    <!-- Include a footer -->
    <%@ include file="footer.jsp" %>
</body>
</html>
```

### **footer.jsp**
```jsp
<p>&copy; 2023 My Website. All rights reserved.</p>
```

---

## **How This Works**
1. **index.jsp**:
    - Displays a form where the user can enter their name.
    - When the form is submitted, the data is sent to **welcome.jsp** via a GET request.

2. **welcome.jsp**:
    - Retrieves the `name` parameter from the request using `request.getParameter("name")`.
    - If no name is provided, it defaults to "Guest".
    - Displays a welcome message using the `<%= ... %>` expression tag.
    - Includes a footer using the `<%@ include %>` directive.

3. **footer.jsp**:
    - A reusable component that displays a footer message.

---

## **JSP Tags Used in the Example**

### **1. Directives**
- **`<%@ page %>`**:
    - Defines page-specific attributes like `contentType` and `pageEncoding`.
  ```jsp
  <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  ```

- **`<%@ include %>`**:
    - Includes the content of another file (e.g., `footer.jsp`) at translation time.
  ```jsp
  <%@ include file="footer.jsp" %>
  ```

### **2. Scripting Elements**
- **`<% ... %>` (Scriptlet)**:
    - Embeds Java code in the JSP page.
  ```jsp
  <%
      String name = request.getParameter("name");
      if (name == null || name.trim().isEmpty()) {
          name = "Guest";
      }
  %>
  ```

- **`<%= ... %>` (Expression)**:
    - Outputs the result of a Java expression.
  ```jsp
  <p>Hello, <%= name %>!</p>
  ```

---

## **Key Points About JSP Tags**
1. **Directives**:
    - Provide global information about the JSP page.
    - Examples: `<%@ page %>`, `<%@ include %>`, `<%@ taglib %>`.

2. **Scripting Elements**:
    - Allow you to embed Java code in JSP.
    - Examples: `<% ... %>`, `<%= ... %>`, `<%! ... %>`.

3. **Action Tags**:
    - Perform specific tasks like including content or forwarding requests.
    - Examples: `<jsp:include>`, `<jsp:forward>`, `<jsp:useBean>`.

4. **Implicit Objects**:
    - Automatically available in JSP (e.g., `request`, `response`, `session`).

---


## **6. Summary**
- **JSP** is a powerful technology for creating dynamic web pages in Java.
- **Scripting Elements**: `<% ... %>`, `<%= ... %>`, `<%! ... %>`
- **Directives**: `<%@ page ... %>`, `<%@ include ... %>`, `<%@ taglib ... %>`
- **Action Tags**: `<jsp:include>`, `<jsp:forward>`, `<jsp:useBean>`, etc.
- **Implicit Objects**: `request`, `response`, `session`, `application`, etc.

stop 2:24 

