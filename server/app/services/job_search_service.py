class JobSearchService:
    @staticmethod
    def filter_jobs(jobs, filters):
        if 'keywords' in filters:
            jobs = jobs.filter(keywords__icontains=filters['keywords'])
        if 'location' in filters:
            jobs = jobs.filter(location__icontains=filters['location'])
        if 'job_type' in filters:
            jobs = jobs.filter(job_type=filters['job_type'])
        return jobs