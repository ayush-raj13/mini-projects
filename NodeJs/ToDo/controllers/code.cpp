#include <iostream>
#include <string>
#include <algorithm>

#include <vector>
using namespace std;

int main()
{
    int t;
    cin >> t;
    vector<string> res;

    while (t--) {
        int n, k;
        cin >> n >> k;

        vector<int> p(n), h(n);
        for (int i = 0; i < n; i++)
            cin >> h[i];

        for (int i = 0; i < n; i++) {
            cin >> p[i];
        }

        int mini = INT32_MAX;
        while (k > 0) {
            mini = *min_element(p.begin(), p.end());
            for (int i = 0; i < n; i++) {
                h[i] = h[i] - k;
                if (h[i] <= 0)
                    h[i] = 0;

                if (h[i] == 0)
                    p[i] = INT32_MAX;
            }
            k = k - mini;
        }

        int flag = 0;
        for (int i = 0; i < n; i++) {
            if (h[i] != 0) {
                flag = 1;
                break;
            }
        }

        if (flag == 0)
            res.push_back("YES");
        else
            res.push_back("NO");
    }

    for (auto i : res) {
        cout << i << endl;
    }
    return 0;
}
