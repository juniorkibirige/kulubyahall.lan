file = open("c:\\users\\iJunior\\Documents\\New Folder\\Kulubya Hall\\resources\\static\\txt\\speeches.txt", 'r')
title = []
null = 0
body = []
tbody = null
for line in file.readlines():
    if line.strip().endswith("\\"):
        if tbody is not null:
            body.append(tbody)
        tbody = []
        title.append(line.strip().strip('\\').strip())
    else:
        tbody.append(line.strip())
body.append(tbody)
print(len(title))
print(len(body))
file.close()