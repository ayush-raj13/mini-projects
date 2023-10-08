# number=int(input("Enter number: "))
number=(999999999999999999999999999999999999)
numbe2=(123456789012345678901234567890123456)
def num_to_cheque(number):
    def less_than_thousand(number):

        ones=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
        tens=['','','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninty']
        
        if number<20:
            return ones[number]
        elif number<100:
            
            return tens[number//10]+" "+ones[number%10]
        elif number<1000:
            if (number%100)//10==1:
                return ones[number//100]+" Hundred "+ones[(number%100)]
            else:
                return ones[number//100]+" Hundred "+tens[(number%100)//10]+' '+ones[(number%100)%10]
        # elif number<100000:
        #     # if number<20000:
        #     return ones[number//1000]+"Thousand"
    if number==0:
        return 'zero'
    thousands=['','thousand','million','billion','trillion','quadrillion','quintillion','sextillion', 'septillion', 'octillion', 'nonillion', 'decillion']
    result=""
    index=0
    while number>0:
        segment=number%1000
        if segment==0:
            segment=number//1000
            return less_than_thousand(segment)+' thousands'
        else:
            if segment>0:
                if index>0:
                    result=less_than_thousand(segment)+' '+thousands[index]+" "+result
                else:
                    result=less_than_thousand(segment)+' '+result
            number=number//1000
            index+=1
    return result
print(num_to_cheque(number))
# for i in range(0,1100,3):
#     print(num_to_cheque(i),i)

# output:- nine Hundred ninty nine decillion 
# nine Hundred ninty nine nonillion 
# nine Hundred ninty nine octillion 
# nine Hundred ninty nine septillion 
# nine Hundred ninty nine sextillion 
# nine Hundred ninty nine quintillion 
# nine Hundred ninty nine quadrillion 
# nine Hundred ninty nine trillion 
# nine Hundred ninty nine billion 
# nine Hundred ninty nine million 
# nine Hundred ninty nine thousand 
# nine Hundred ninty nine 
