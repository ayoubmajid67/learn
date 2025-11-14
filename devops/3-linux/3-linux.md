# Introduction to Linux
Linux is a powerful and versatile open-source operating system kernel. It serves as the foundation for a wide variety of operating systems, known as Linux distributions (or distros), such as Ubuntu, Fedora, and Debian. Originally created by Linus Torvalds in 1991, Linux has grown through the contributions of a massive global community. It is renowned for its stability, security, and flexibility, making it a popular choice for everything from web servers and supercomputers to desktops and mobile devices.
## SED (Stream editor)
A short, practical SED reference. Use sed when you want quick, scriptable edits without opening an editor.

Basic form:

sed [options] 'command' file

Key options:
- `-n`  : suppress automatic printing (use `p` to print matching lines)
- `-i`  : edit file in-place (use `-i.bak` to keep a backup)
- `-e`  : add multiple commands
- `-f`  : read commands from a file
- `-E`  : use extended regular expressions (portable on macOS/BSD)

Simple examples:

- Replace all occurrences (show output):

```bash
sed 's/AZURE/AWS/g' file.txt
```

- Replace in-place and keep a backup:

```bash
sed -i.bak 's/AZURE/AWS/g' file.txt
```

- Delete lines that contain TODO:

```bash
sed '/TODO/d' file.txt
```

- Print only lines that match ERROR:

```bash
sed -n '/ERROR/p' logfile.txt
```

- Use alternate delimiter when pattern has `/`:

```bash
sed 's|/usr/bin|/opt/bin|g' file.txt
```

Quick safety tips:
- Test without `-i` first to preview changes.
- Use `-i.bak` or `-i ''` (macOS) to avoid accidental data loss.
- For complex edits prefer a script file (`-f`) or use `awk`/Python when logic exceeds sed's simplicity.

That's a compact set to get started — tell me if you want a printable one-line cheat-sheet or 3 short exercises with solutions.
* **Pricing:** Pay per hour (on-demand) or reserve for cheaper rates.
* **Best practice:** Start with `t3.micro` for testing, scale up later.

---

## 4️⃣ **Key Pair (Login)**

### ➤ Example: `myKey`

* **Purpose:** Secure SSH authentication (no password login).
* **How it works:**

  * AWS keeps the public key.
  * You download the private key (`.pem` file).
* **Used for:** Connecting via SSH (Linux) or RDP (Windows).
* **Best practice:**

  * Never lose your key file — AWS cannot recover it.
  * Store it securely (e.g., in AWS Secrets Manager or locally with restricted permissions).

---

## 5️⃣ **Network Settings**

### ➤ Network (VPC)

* **Example:** `vpc-05d99f548718f027e`
* **Purpose:** Defines the private network your instance lives in.
* **Each VPC contains:** Subnets, route tables, and security configurations.
* **Best practice:** Use a VPC per environment (e.g., dev, prod).

### ➤ Subnet

* **Purpose:** Defines which **availability zone** (data center) the instance runs in.
* **“No preference”** lets AWS choose automatically.
* **Best practice:** Place instances near dependent resources (databases, load balancers).

### ➤ Auto-assign Public IP

* **Enable:** Assigns a public IP so you can connect via the Internet.
* **Disable:** Instance is private (used for internal servers).
* **Best practice:** Enable only for publicly accessible services or development.

---

## 6️⃣ **Firewall (Security Groups)**

### ➤ Security Group

* **Purpose:** A virtual firewall controlling inbound and outbound traffic.
* **Rules example:**

  * Allow SSH (port 22) from anywhere → `0.0.0.0/0`
  * Allow HTTP (port 80) from anywhere
  * Allow HTTPS (port 443) from anywhere
* **Best practice:**

  * Restrict SSH to your IP only.
  * Use HTTPS for web traffic.
  * Avoid open rules (`0.0.0.0/0`) unless absolutely needed.

---

## 7️⃣ **Configure Storage**

### ➤ Example:

| Type | Size  | Volume | IOPS | Encryption    |
| ---- | ----- | ------ | ---- | ------------- |
| Root | 8 GiB | gp3    | 3000 | Not encrypted |

* **Root volume:** The disk where the OS is installed.
* **Type:**

  * `gp3` (default) = General-purpose SSD (balance of price/performance)
  * `io2` = High-performance SSD (for databases)
* **IOPS:** Input/Output operations per second (3000 default = fine for small workloads)
* **Encryption:** Protects data at rest.
* **Best practice:**

  * Use encryption in production.
  * Increase size if installing large software or storing files.

---

## 8️⃣ **Advanced Details**

### ➤ Number of Instances

* **Default:** 1
* **Purpose:** You can launch multiple instances with the same settings.

### ➤ User Data (optional)

* **Purpose:** Run scripts automatically at launch.
* **Example:** Install software or configure environment:

  ```bash
  #!/bin/bash
  sudo yum update -y
  sudo yum install nginx -y
  sudo systemctl start nginx
  ```
* **Best practice:** Use this for bootstrapping (DevOps automation).

---

## 9️⃣ **Summary Section**

This gives a final recap:

| Category       | Example           |
| -------------- | ----------------- |
| AMI            | Amazon Linux 2023 |
| Instance Type  | t3.micro          |
| Security Group | launch-wizard-1   |
| Storage        | 8 GiB gp3         |
| Count          | 1                 |
| Key Pair       | myKey             |

Click **Launch Instance** to create and deploy.

---

## 🔐 **Post-Launch Steps**

1. **Access instance:**

   ```bash
   ssh -i myKey.pem ec2-user@<public-ip>
   ```
2. **Secure configuration:**

   * Change SSH access to your IP.
   * Enable automatic updates.
3. **Create Elastic IP** (optional) for a permanent IP address.
4. **Monitor usage** in CloudWatch to track CPU, memory, and network.

---

## ⚙️ **In Summary**

| Attribute      | Description        | Best Practice                 |
| -------------- | ------------------ | ----------------------------- |
| Name & Tags    | Identification     | Add `Owner`, `Env`, `Project` |
| AMI            | OS + base software | Choose verified AMI           |
| Instance Type  | Hardware capacity  | Start small, scale up         |
| Key Pair       | SSH login          | Keep private key secure       |
| Network        | VPC + subnet       | Use custom VPC for production |
| Security Group | Firewall rules     | Restrict access               |
| Storage        | Disk               | Encrypt & right-size          |
| Advanced       | Scripts, count     | Automate with user data       |

## Connect to EC2 VM using SSH

1.  **Place your key file:** Put the `vm1_key.pem` file in a directory on your local machine.

2.  **Open a terminal:** Open a terminal (like Git Bash on Windows) in the same directory where you placed the `.pem` file.

3.  **Set file permissions:** Run the following command to ensure your key is not publicly viewable. This is a required step for SSH.
    ```bash
    chmod 400 vm1_key.pem
    ```

4.  **Connect to the instance:** Use the `ssh` command with your key file (`-i`), the appropriate username for your instance (e.g., `ubuntu` or `ec2-user`), and the instance's public DNS.

    ```bash
    ssh -i "vm1_key.pem" ubuntu@ec2-56-228-3-175.eu-north-1.compute.amazonaws.com
    ```

    *   **`ssh -i "vm1_key.pem"`**: Specifies the identity file (your private key) to use for authentication.
    *   **`ubuntu@...`**: The username for the remote machine. This depends on the Amazon Machine Image (AMI) you used. Common usernames are `ubuntu` (for Ubuntu), `ec2-user` (for Amazon Linux), `fedora` (for Fedora).
    *   **`ec2-56-228-3-175.eu-north-1.compute.amazonaws.com`**: The public DNS of your EC2 instance.

![1761741061777](image/3-linux/1761741061777.png)

## connect with mobaXterm software just for windows: 
1- download  the software : 
[link](https://mobaxterm.mobatek.net/download-home-edition.html)
![1761743467987](image/3-linux/1761743467987.png)

2- open the software create a new session 
- put the host name as the : Public PIv4 in the provider 
- put the username as <ec2_name>
- put the private key as the path of the private key file
![1761744288037](image/3-linux/1761744288037.png)



## linux file system && Essential commands : 
- Everything in Linux is a file
- **File system hierarchy:** The structure of directories and files.
- **Common directories:**

  * `/` = Root directory
  * `/home` = User directories
  * `/etc` = System configuration files
  * `/var` = Variable data (logs, databases)
  * `/tmp` = Temporary files
- **File Types:**:
  * `-` = Regular file
  * `d` = Directory
  * `l` = link file
  

- **Essential commands:**

  * `clear` = Clear the terminal screen
  * `ls` = List files and directories 
         - `-l` : list details (permissions, size, date)
         - `-t` : sort my modification time 
         - `-r` : reverse the sort order
         - `-a` : show hidden files
  * `cd` <path> = Change directory
            - `cd ..` : Go up one directory
            - `cd ~` : Go to the home directory
            -  `cd -` : Go back to the previous directory
            - `cd /` : Go to the root directory
  * `pwd` = Print working directory
  * `mkdir`<dirname> = Make directory
  * `rm` <filename> = Remove file 
            `rm` -r <dirname> = Remove directory and its contents
            ```rm` -f <filename> = Force remove file (no confirmation)
  * `cp` <src> <dest> = Copy file or directory
  * `whoami` = Get the current user
  * `rmdir` <dirName> = Remove empty directory
  * `touch` <filename>  = Create an empty file
  # search annotations 

## Metacharacters in Linux

Metacharacters are special characters that have a specific meaning to the shell. They are used for file matching, redirection, piping, and more.

### File Matching (Wildcards)

*   `*`: Matches zero or more characters.
*   `?`: Matches any single character.
*   `[]`: Matches any one of the enclosed characters.

### Redirection

*   `>`: Redirects standard output to a file, overwriting the file if it exists.
*   `>>`: Appends standard output to a file.
*   `<`: Redirects standard input from a file.
*   `2>`: Redirects standard error to a file.
*   `&>`: Redirects both standard output and standard error to a file.

### Piping

*   `|`: Sends the output of one command as input to another command.

### Command Separation

*   `;`: Separates multiple commands on a single line.
*   `&&`: Executes the second command only if the first command succeeds.
*   `||`: Executes the second command only if the first command fails.

### Background Execution

*   `&`: Runs a command in the background.

### Quoting

*   `\` (Backslash): Escapes the next character, treating it as a literal character.
*   `''` (Single Quotes): Treats every character literally.
*   `""` (Double Quotes): Allows variable and command substitution.


*mv <oldFileName> <new file name>* : rename a file or directory

*mv <oldFileName> <path>* : move a file to a new location

*cat <fileName>* : print the content of a file 
*cat > <filename>  * : put the content in a file  (the file optionally can not be exist before) [note : press ctrl + d to end the input]
***cat >> <filename>  * : append the content in a file  (the file optionally can not be exist before)

*Example* : 
![1762165469362](image/3-linux/1762165469362.png)

** cat -n <filename> * : show the content of the file including the line number**

**rev <filename> ** : show the content of the file in reverse   
                      alphabetical order

**tac <filename> ** : show the content of the file from bottom to top
**cp <filename> <newFileName>** : copy a file to a new file
**cp <file1Name> <file2Name> > <newFileName>** : copy the content of two files to a new file

*cp -r <dirName> <newDirName>** : copy a directory to a new directory

*head -n <numberOfLines> <fileName> : show the first <numberOfLines> lines of a file [ if n is negative it will show the all lines except the last n lines]

*tail -n <numberOfLines> <fileName> : show the last <numberOfLines> lines of a file[ if n is negative it will show the all lines except the first n lines]


** history ** :  display the history of commands that has been written in the linux machine 

## Grep Command : 
grep is a powerful command-line utility used to search for patterns in text files. It can be used to search for specific text strings, regular expressions, or patterns within files or directories.

### Syntax

```bash
grep [options] pattern [file...]
```

### Options

* `-i`: Ignore case distinctions.
* `-v`: Invert match, i.e., select non-matching lines.
* `-r`: Recursively search directories.
* `-l`: List filenames where matches are found.
* `-n`: Prefix each line of output with the line number within its file.
* `-c`: Print a count of matching lines per
* `-w`: Match the pattern as a whole word.
* `-E`: Interpret the pattern as a regular expression.

### Examples

* `grep "pattern" file.txt`: Search for the pattern "pattern" in file.txt.
* `grep -i "pattern" file.txt`: Search for the pattern "pattern" in file.txt, ignoring case.
* `grep -v "pattern" file.txt`: Search for lines that do not contain the pattern "pattern" in file.txt.
* `grep -r "pattern" directory/`: Recursively search for the pattern "pattern" in all files within the directory.

# example  : 
![1762169135368](image/3-linux/1762169135368.png)


- search for all 'aws' keyword in the current dir : 
![1762170588748](image/3-linux/1762170588748.png)

* `wc <fileName>` : count the number of (lines ,  
                    words , characters) in the file 

* `diff <fileName> <fileName>` : check the difference between two files 


# Text editors in Linux : 
## Text editors in Linux

Text editors are a core skill in Linux. Whether you're editing config files on a server or writing scripts, knowing a small set of editors and basic commands will make you productive quickly. Below are the most common editors and essential commands to get started.

### Nano (beginner-friendly)
- Start: `nano <file>`
- Save: Ctrl+O (then Enter)
- Exit: Ctrl+X
- Cut line: Ctrl+K, Paste: Ctrl+U
- Search: Ctrl+W

Why use it: Nano is simple, installed on most distros, and great for quick edits on remote servers.

### Vim (powerful, modal)
it's a default editor in linux machines 
- Start: `vim <file>`
- Modes: `i` (insert), `Esc` (return to normal), `:` (command-line)
- Save and quit: `:wq` or `:x`; quit without saving: `:q!`
- Navigation (normal mode): `h` `j` `k` `l` (left/down/up/right)
- Common edits: `dd` (delete line), `yy` (yank/copy line), `p` (paste), `u` (undo)
- Search: `/pattern`  — replace: `:%s/old/new/g`

Why use it: Vim is ubiquitous, extremely fast once learned, and available on virtually every Unix system.

### Emacs (extensible)
- Save: `C-x C-s` (Ctrl+x then Ctrl+s)
- Exit: `C-x C-c`
- Emacs has powerful extensibility via Lisp and many built-in tools (shell, project management, REPLs).

Why use it: Emacs is ideal if you want an all-in-one environment and deep customization.

### GUI editors
- `gedit`, `kate`, `mousepad` — lightweight graphical editors for desktops
- `Visual Studio Code` (`code`) — full-featured editor with extensions (install separately)

When to use: Use GUI editors for local development and when you need a richer UI. Use terminal editors when working on headless servers.


## SED Simplified Guide

**What is SED?**
A command-line text editor that automatically transforms text - perfect for find/replace, filtering, and batch edits without opening files.

**Basic Command:**
```bash
sed 's/find/replace/[flags]' file.txt
```
### Flags : 
- `/i` : ignore case 
- `/g` : The /g flag means "global" - it tells sed to replace ALL occurrences on each line, not just the first one.



**Most Useful Examples:**

1. **Simple replace** (view changes):
   ```bash
   sed 's/old/new/g' file.txt
   ```

2. **Actually edit the file:**
   ```bash
   sed -i 's/old/new/g' file.txt        # Linux
   sed -i '' 's/old/new/g' file.txt     # Mac
   ```
3. **Delete lines**
 ```bash
  sed -i '$d' file.txt
  # delete the first line
  sed -i '1d' file.txt

  # delete the second line : 
  sed -i '2d' file.txt

  # delete  a range of lines from 1 to 6 : 
  sed -i '1,6d' file.txt

  # delete from the third line : 
  sed -i '3,$d' file.txt



 ```

3. **Delete lines containing "error":**
   ```bash
   sed '/error/d' file.txt
   ```

4. **Find specific lines:**
   ```bash
   sed -n '/important/p' file.txt
   ```

5. **Multiple changes at once:**
   ```bash
   sed -e 's/foo/bar/' -e '/^#/d' file.txt
   ```

6. ## Insert Content at Specific Lines with `sed`

### 1. **Insert BEFORE a specific line number:**
```bash
sed '3i\This is inserted before line 3' file.txt
```

### 2. **Insert AFTER a specific line number:**
```bash
sed '3a\This is inserted after line 3' file.txt
```

### 3. **Insert at the BEGINNING (line 1):**
```bash
sed '1i\This is the first line now' file.txt
```

### 4. **Insert at the END:**
```bash
sed '$a\This is the last line' file.txt
```

## Examples:

**Sample file (file.txt):**
```
Line 1: Apple
Line 2: Banana
Line 3: Orange
Line 4: Grape
```

### Insert before line 3:
```bash
sed '3i\INSERTED BEFORE LINE 3' file.txt
```
**Output:**
```
Line 1: Apple
Line 2: Banana
INSERTED BEFORE LINE 3
Line 3: Orange
Line 4: Grape
```

### Insert after line 2:
```bash
sed '2a\INSERTED AFTER LINE 2' file.txt
```
**Output:**
```
Line 1: Apple
Line 2: Banana
INSERTED AFTER LINE 2
Line 3: Orange
Line 4: Grape
```

### Insert at beginning:
```bash
sed '1i\=== FILE STARTS ===' file.txt
```
**Output:**
```
=== FILE STARTS ===
Line 1: Apple
Line 2: Banana
Line 3: Orange
Line 4: Grape
```

### Insert at end:
```bash
sed '$a\=== FILE ENDS ===' file.txt
```
**Output:**
```
Line 1: Apple
Line 2: Banana
Line 3: Orange
Line 4: Grape
=== FILE ENDS ===
```

## Insert Multiple Lines:

**Using `\` for line continuation:**
```bash
sed '2i\First new line\
Second new line\
Third new line' file.txt
```

**Or use multiple `-e` options:**
```bash
sed -e '1i\Header Line 1' -e '1i\Header Line 2' file.txt
```

## Insert Based on Pattern:

**Insert before lines containing "Orange":**
```bash
sed '/Orange/i\ABOVE ORANGE' file.txt
```

**Insert after lines containing "Banana":**
```bash
sed '/Banana/a\BELOW BANANA' file.txt
```

## Edit File In-Place:

**Linux:**
```bash
sed -i '1i\# New Header' file.txt
```

**macOS:**
```bash
sed -i '' '1i\# New Header' file.txt
```
**Pro Tips:**
- Always test without `-i` first to preview changes
- Use `|` instead of `/` if your text contains slashes: `s|/usr/bin|/opt/bin|`
- On Mac, you MUST use `-i ''` for in-place edits

**When to use SED:** Quick text transformations, batch replacements, simple filtering.

**When NOT to use:** Complex logic - switch to awk or Python instead.

Think of SED as "search and replace on steroids" for the command line!