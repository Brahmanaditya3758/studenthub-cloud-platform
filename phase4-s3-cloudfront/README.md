## What i built 

Deployed the StudentHub static website using Amazon S3 and CloudFront with HTTPS and Origin Access Control (OAC).

### Phase 4 Architecture
![Phase 4 Architecture](../docs/phase4-archi.png)


- Uploaded `index.html` and `style.css` to Amazon S3.


### Website HTML
![Website HTML](../docs/index.png)


### Website CSS
![Website CSS](../docs/style.png)

- Kept S3 Block Public Access enabled.

### S3 Bucket
![Amazon S3 Bucket](../docs/s3-bucket.png)


- Configured CloudFront with Origin Access Control (OAC).


## CloudFront Dashboard
![CloudFront Dashboard](../docs/dashboard.png)
 

- Enabled HTTPS using CloudFront's default TLS certificate.


- Set `index.html` as the default root object.


## What I learned

- How to store and manage static website files using Amazon S3.
- How to keep an S3 bucket private using Block Public Access.
- How to configure Amazon CloudFront to deliver website content.
- How Origin Access Control (OAC) securely connects CloudFront to a private S3 bucket.
- How HTTPS and TLS certificates help secure website traffic.
- How to configure `index.html` as the default root object.
- How to document cloud infrastructure using architecture diagrams and screenshots.

## Key Takeaway

I learned how to host and securely deliver a static website using Amazon S3 and CloudFront while keeping the S3 bucket private.


