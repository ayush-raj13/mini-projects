#include <stdio.h>
int main()
{
    printf("Total number of matchsticks are = 101.\n");
    printf("You've to pick a certain number of matchsticks.\n");
    printf("Available options are = 1,2,3,4,5,6,7,8,9\n");
    printf("Computer will pick a certain number of matchsticks, after you.\n");
    printf("Whoever is forced to pick up the last matchstick loses the game.\n");
    printf("NOW,");
    int MS = 101, comp, picked;
    for (int i = 0; i < 11; i++)
    {
        printf("Pick matchsticks-\n");
        scanf("%d", &picked);
        if (picked > 9 || picked < 1)
        {
            printf("Play within the rules.\n");
            continue;
        }
        MS = MS - picked;
        printf("Number of matchsticks left=%d\n", MS);

        comp = 10 - picked; // minus 10 isliye kia taki sum 10 rhe total
        // 10 k multiple m rhega tbi last m 1 bachega
        printf("Number of sticks computer picked=%d\n", comp);

        MS = MS - comp;
        printf("Number of matchsticks left=%d\n", MS);
        if (MS == 1)
        {
            printf("AS,Number of matchsticks left = 1.\n");
            printf("Hence,computer won.");
            break;
        }
    }
    getch();
    return 0;
}
