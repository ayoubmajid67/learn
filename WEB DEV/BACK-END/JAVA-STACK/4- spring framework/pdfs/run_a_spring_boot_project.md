---

## ✅ Solution: Install Java 17 and set it as default

---

### 🔧 Step 1: **Download and Install Java 17**

You can use any trusted distribution. Here's the easiest:

#### 🟦 Option A: **Adoptium (Recommended)**

Visit:

👉 [https://adoptium.net/en-GB/temurin/releases/?version=17](https://adoptium.net/en-GB/temurin/releases/?version=17)

* Select  **Windows x64** ,  **JDK 17** , and install it.

#### 🟦 Option B: **Oracle JDK 17**

Visit:

👉 [https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

---

### ⚙️ Step 2: **Set JAVA_HOME and update your PATH**

After installing Java 17:

#### 🛠️ Set `JAVA_HOME`:

1. Press `Win + S`, search for  **Environment Variables** , and open it.
2. Under  **System Variables** , click  **New** :
   * Variable name: `JAVA_HOME`
   * Variable value: Path to your Java 17 installation (e.g., `C:\Program Files\Java\jdk-17.0.x`)

#### 🛠️ Add `JAVA_HOME/bin` to PATH:

1. Still in  **Environment Variables** , find the `Path` variable under  **System Variables** .
2. Click **Edit** > **New**
3. Add:
   ```
   %JAVA_HOME%\bin
   ```

---

### ✅ Step 3: **Verify Setup**

Close and reopen your terminal (or use `cmd`) and run:

```bash
java -version
javac -version
echo %JAVA_HOME%
```

Expected output should look like:

```
java version "17.0.x"
javac 17.0.x
C:\Program Files\Java\jdk-17.0.x
```

---

### 🚀 Step 4: Run Your Spring Boot App

```bash
cd C:\vs code\intellcap\MR-BOOKING-PLATFORM\dev\MR-BOOKING-BACK\springSecurityCode
./mvnw spring-boot:run
```