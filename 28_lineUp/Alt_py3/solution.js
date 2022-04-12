function solution(commands) {
    let clock = {
      L: 1,
      R: 3,
      A: 2
    };
    let antiC = {
      R: 1,
      L: 3,
      A: 2
    };
    let clock_sum = 0;
    let antiC_sum = 0;
    let result = 0;
    for (let i = 0; i < commands.length; i++) {
      let cmd = commands[i];
      clock_sum = (clock_sum + clock[cmd]) % 4;
      antiC_sum = (antiC_sum + antiC[cmd]) % 4;
      if (clock_sum === antiC_sum) result++;
    }
    return result;
  }


// Alt 2
def solution(commands):
    d = {'A':2, 'L':1, 'R':-1}
    x = 0
    c = 0
    for i in commands:
        x+= d[i]
        if x%2==0:
            c+=1
    return c

// Alt 3
def solution(c):
    x, y = 0, 0
    for i in c:
        if i == 'L': x += 1
        if i == 'R': x -= 1
        y += x % 2 == 0
    return y

// Alt 4
def solution(commands):
    count = 0
    smart_student = 0
    dumb_student = 0
    for command in commands:
        if command == 'L':
            smart_student = (smart_student - 1) % 4
            dumb_student = (dumb_student + 1) % 4
        elif command == 'R':
            smart_student = (smart_student + 1) % 4
            dumb_student = (dumb_student - 1) % 4
        elif command == 'A':
            smart_student = (smart_student + 2) % 4
            dumb_student = (dumb_student + 2) % 4

        if smart_student == dumb_student:
            count += 1
    return count   
    
// Alt 5
def solution(commands):
    c, s = 0, True
    for i in commands:
        if i == "L" or i == "R":
            if s: s = False
            else: 
                c += 1
                s = True
        elif s: c += 1
    return c

// Alt 6
def solution(commands):
    count=0
    same_direction=True
    for x in commands:
        if same_direction:
            if x == 'A':
                count+=1
            else:
                same_direction=False
        else:
            if x != 'A':
                same_direction=True
                count+=1
    return count

// Alt 7
def solution(commands):
    
    previousCommands = []
    sameDirection = 0
    sameDirectionBool = True
    
    for i in range(0,len(commands)):
        
        if len(previousCommands) == 0:
            if commands[0] == 'A':
                sameDirection += 1
                sameDirectionBool = True
            else:
                sameDirectionBool = False
            previousCommands.append(commands[0])
        else:
            sameDirectionBool = issueCommand(previousCommands[len(previousCommands)-1],commands[i],sameDirectionBool)
            if sameDirectionBool:
                sameDirection += 1
            previousCommands.append(commands[i])
            
    return sameDirection

def issueCommand(prev, curr, same):
    if same == True and prev in ['L', 'R'] and curr in ['L','R']:
        return False
    elif same == False and prev in ['L', 'R'] and curr in ['L','R']:
        return True
    elif same == True and curr in ['L', 'R']:
        return False
    elif same == False and curr in ['L', 'R']:
        return True
    elif same == True and curr == 'A':
        return True
    elif same == False and curr == 'A':
        return False
    print('-1')
    
// Alt 8
def solution(commands):
    i = 0
    multi = 1
    count = 0
    while i < len(commands):
        a = commands[i]
        if a == "A":
            multi = multi * 1
            if multi == 1:
                count = count + 1
        elif a == "L" or "R":
            multi = multi*-1
            if multi == 1:
                count = count + 1
        i = i + 1 
            
    return count   
    
// Alt 9
def solution(commands):
    count, ans = 0, 0

    for command in commands:
        count += command in "LR"
        ans += 1 - count % 2 
        
    return ans
    
// Alt 10
def solution(commands):
    """Idea: first student mixes up L/R
    0 = facing front
    1 = facing right
    2 = facing back
    3 = facing left
    """
    students = [0, 0]
    tot = 0
    for i, c in enumerate(commands, 1):
        if c == "L":
            students[0] = (students[0] - 1) % 4
            students[1] = (students[1] + 1) % 4
        elif c == "R":
            students[0] = (students[0] - 1) % 4
            students[1] = (students[1] + 1) % 4
        else:
            for j in range(2):
                students[j] = (students[j] + 2) % 4
                
        if len(set(students)) == 1:
            tot += 1
    return tot
           
// Alt 11
def solution(commands):

    counter = 0
    
    for i in commands:
        if i == 'L':
            counter += 0.5
        elif i == 'R':
            counter += 0.5
        elif i == 'A' and counter%1 == 0:
            counter += 1
    return(int(counter))    

// Alt 12    
def solution(commands):
    count1 = 1
    count2 = 1
    total = 0
    for val in commands:
        if val == "L":
            count1 = (count1+1)%4
            count2 = (count2-1)%4
        if val == "R":
            count1 = (count1-1)%4
            count2 = (count2+1)%4
        if val == "A":
            count1 = (count1+2)%4
            count2 = (count2+2)%4
        if count1%4 == count2%4:
            total += 1
        print(val)
        print(count1)
        print(count2)
    return total

//  Alt 13 
def solution(commands):
    same = 0
    misaligned = False
    for c in commands:
        if c == "L":
            if misaligned:
                misaligned = False
                same += 1
            else:
                misaligned = True
        elif c == "R":
            if misaligned:
                misaligned = False
                same += 1
            else:
                misaligned = True
        else:
            if not misaligned:
                same += 1
        
    return same
