import string
import time
import sys

text = "Djt me thang Tam an cut"
temp = ''
lst = ['!', '@', '#']
for idx, ch in enumerate(text):
    sys.stdout.write('\r' + temp + ch)
    sys.stdout.flush()
    time.sleep(0.02)
    if idx < len(text) - 1:
        for i in lst:
            sys.stdout.write('\r' + temp + ch + i)
            sys.stdout.flush()
            time.sleep(0.02)
    temp += ch
print()