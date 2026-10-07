# Contact form setup on Vercel

The contact form stores each submission in PostgreSQL, emails the submission to
`info@medgenz.com`, and automatically sends the submitter a branded MedGenz
confirmation. You can optionally override its subject and plain-text body in
Vercel environment variables.

## 1. Confirm the production database

1. Open the MedGenz project in the Vercel dashboard.
2. Open **Storage** and confirm the PostgreSQL database is connected to this
   project. Vercel's database products are provided through its storage
   integrations, so use the connection details shown for the database provider
   connected to your project.
3. In **Settings → Environment Variables**, confirm `DATABASE_URL` exists for
   **Production**. It must be the PostgreSQL connection URL Prisma can use. If
   the provider gives separate pooled and direct URLs, use a URL suitable for
   Prisma migrations because the production build runs `prisma migrate deploy`.
4. Do not use a local-development database URL for the production deployment.

## 2. Get SMTP settings from the mailbox provider

In the email hosting control panel for `info@medgenz.com`, find its SMTP
configuration. You need the SMTP hostname, port, username, and password (or
provider-issued app password). Do not put the mailbox password in source code,
commit it, or send it in chat. Some providers require an app password instead
of the normal account password.

Use the provider's documented settings:

- Port `465`: implicit TLS.
- Port `587`: STARTTLS.
- Do not use port `25` for Vercel serverless email delivery.

The hosting provider must permit outbound SMTP connections from Vercel. If it
does not, use an email delivery provider that supports serverless applications
and update the mail transport before relying on the form.

## 3. Add the Vercel environment variables

In Vercel, open **Settings → Environment Variables** and add these values for
**Production** (and Preview only if Preview deployments should send real email):

| Name | Value |
| --- | --- |
| `SMTP_HOST` | SMTP hostname from the mailbox provider |
| `SMTP_PORT` | `465` or `587`, as specified by the provider |
| `SMTP_USER` | `info@medgenz.com` |
| `SMTP_PASS` | The provider-issued SMTP/app password |
| `CONTACT_RECEIVER` | `info@medgenz.com` |
| `DATABASE_URL` | Production PostgreSQL URL; verify it is already configured |

The project falls back to `info@medgenz.com` if `CONTACT_RECEIVER` is omitted,
but configuring it explicitly is recommended. Never prefix these server-side
variables with `NEXT_PUBLIC_`.

For local testing, copy the equivalent values into `.env.local`. That file is
ignored by Git; never commit it.

## 4. Deploy the database migration

The contact-submission table is defined in
`prisma/migrations/20261007100000_add_contact_submissions/migration.sql`.
The existing Vercel build command runs `prisma migrate deploy`, so a deployment
with `DATABASE_URL` configured applies this migration before the app is built.

1. Commit and push the application changes to the connected Git branch.
2. In Vercel, confirm the deployment build completes successfully.
3. If the migration fails, check the production database URL and database
   access settings in the build log. Do not manually change the production
   schema or delete the database to work around a migration failure.

## 5. Customize the automatic confirmation (optional)

The site sends a branded confirmation email by default. It thanks the person
by name, confirms the inquiry topic, and explains that the team will review
their requirements. No extra environment variables are needed to use it.

If you want different copy, add either or both variables in Vercel:

| Name | Value |
| --- | --- |
| `CONTACT_AUTOREPLY_SUBJECT` | Your approved email subject |
| `CONTACT_AUTOREPLY_TEXT` | Your approved plain-text email body |

If omitted, the corresponding built-in default is used. The body supports
these placeholders, which are replaced with the submitted form values:

- `{{name}}`
- `{{email}}`
- `{{phone}}`
- `{{subject}}`
- `{{designation}}`
- `{{message}}`

You can paste line breaks into the body value in Vercel. A custom body is sent
inside the same styled MedGenz email layout. After setting or changing
environment variables, redeploy the project so the running deployment
receives the new values. The auto-reply is sent from `SMTP_USER` to the
submitter's email address.

## 6. Test the live form

1. Open the deployed `/contact` page and submit a test using an email address
   you can check.
2. Confirm the page reports success.
3. Confirm the submission arrives at `info@medgenz.com`. Replies to that
   notification go to the submitter because the notification uses their
   address as `Reply-To`.
4. Check the submitter inbox and spam folder for the automatic confirmation.
   If you configured custom copy, confirm the override appears in the email.
5. If submission fails, review the deployment's function logs for the
   `Contact form submission failed`, `Contact form auto-reply failed`, or
   configuration error messages. Never share SMTP passwords in logs or support
   messages.

Submissions are retained in the `ContactSubmission` PostgreSQL table. The
current project does not include an admin page for viewing them; the email
notification is the immediate way to receive and respond to inquiries.
