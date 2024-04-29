import numpy as np

def sigmoid(z):     #This function is already you have, but I write it to give you output...
    s = 1 / (1 + np.exp(-z))
    return s

def gradient(X, y, w, b):
    n, d = X.shape
    wgrad = np.zeros(d)
    bgrad = 0.0
    
    for i in range(n):
        z = -y[i] * (np.dot(w, X[i]) + b)
        sigma_z = sigmoid(z)
        wgrad += -y[i] * sigma_z * X[i]
        bgrad += -y[i] * sigma_z
    
    return wgrad, bgrad


def logistic_regression(X, y, max_iter, alpha):
    '''
    Trains the logistic regression classifier on data X and labels y using gradient descent for max_iter iterations with learning rate alpha.
    Returns the weight vector, bias term, and losses at each iteration AFTER updating the weight vector and bias.
    
    Input:
        X: data matrix of shape nxd
        y: n-dimensional vector of data labels (+1 or -1)
        max_iter: number of iterations of gradient descent to perform
        alpha: learning rate for each gradient descent step
        
    Output:
        w, b, losses
        w: d-dimensional weight vector
        b: scalar bias term
        losses: max_iter-dimensional vector containing negative log likelihood values AFTER a gradient descent in each iteration
    '''
    n, d = X.shape
    w = np.zeros(d)
    b = 0.0
    losses = np.zeros(max_iter)

    for iteration in range(max_iter):
        wgrad, bgrad = gradient(X, y, w, b)
        w -= alpha * wgrad
        b -= alpha * bgrad

        losses[iteration] = log_loss_grader(X, y, w, b)

    return w, b, losses
