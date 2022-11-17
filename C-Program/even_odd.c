
#include <stdio.h>

int main()
{
    int num;

    /* Input number from user */
    printf("Enter any number: ");
    scanf("%d", &num);


    /*
     * If  num modulo division 5 is 0 
     * and num modulo division 11 is 0 then
     * the number is divisible by 5 and 11 both
     */
    if(num % 2 == 0)
    {
        printf("%d is Even Number", num);
    }
    else
    {
        printf("%d is Odd Number", num);
    }

    return 0;
}