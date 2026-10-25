# What I Built

Deployed the StudentHub static website using Amazon S3 and CloudFront with HTTPS and Origin Access Control (OAC).

## Phase 4 Architecture

![Phase 4 Architecture](../docs/screenshots/phase4-archi.png)

## What I Implemented

- Uploaded `index.html` and `style.css` to Amazon S3.
- Kept S3 Block Public Access enabled.
- Configured CloudFront with Origin Access Control (OAC).
- Enabled HTTPS using CloudFront's default TLS certificate.
- Set `index.html` as the default root object.

## Screenshots

### Website HTML

![Website HTML](../docs/screenshots/index.png)

### Website CSS

![Website CSS](../docs/screenshots/style.png)

### S3 Bucket

![Amazon S3 Bucket](../docs/screenshots/s3-bucket.png)

### CloudFront Dashboard

![CloudFront Dashboard](../docs/screenshots/dashboard.png)

## What I Learned

- How to store static website files using Amazon S3.
- How to keep an S3 bucket private using Block Public Access.
- How CloudFront delivers website content.
- How OAC securely connects CloudFront to a private S3 bucket.
- How HTTPS and TLS certificates help secure website traffic.
- How to configure a default root object.
- How to document cloud infrastructure using diagrams and screenshots.

## Key Takeaway

I learned how to host and securely deliver a static website using Amazon S3 and CloudFront while keeping the S3 bucket private.

**Live Website:** https://dknnvtj5n5i96.cloudfront.net

**GitHub Repository:** https://github.com/Brahmanaditya3758/studenthub-cloud-platform
