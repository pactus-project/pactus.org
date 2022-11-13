---
layout: learn
title: Transactions fee
permalink: /learn/transaction/fee/index.html
---

# Transactions fee

In Pactus, the transaction fee is calculated based on the transferred amount. The formula is quite
simple.

$$
\mathbf{fee = amount \times  percentage }
$$
<br>
<br>
$$
fee =
\begin{cases}
 & fee_{min}  \quad \text{ if }  fee < fee_{min} \\
 & fee \\
 & fee_{max}  \quad \text{ if }  fee > fee_{max}
\end{cases}
$$
<br>
<br>

$$percentage$$, $$fee_{min}$$ and $$fee_{max}$$ are part of
[consensus parameters](/learn/basic/genesis).

For example, if Alice is going to send 20,000 to Bob, she should pay 2 coins as a fee for her
transaction.
